import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const MyPayBills = () => {
  const { user, loading } = useContext(AuthContext);
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/payments?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBills(data))
        .catch((err) => console.error("Error loading bills:", err));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg">Loading your bills...</div>
    );
  }

  const totalBills = bills.length;
  const totalAmount = bills.reduce(
    (sum, bill) => sum + Number(bill.amount || 0),
    0
  );

  const handleUpdate = (bill) => {
    setSelectedBill(bill);
    setIsModalOpen(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBill = {
      amount: form.amount.value,
      address: form.address.value,
      phone: form.phone.value,
      date: form.date.value,
    };

    try {
      const res = await fetch(
        `http://localhost:5000/payments/${selectedBill._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedBill),
        }
      );
      const data = await res.json();
      if (data.success) {
        setBills((prev) =>
          prev.map((b) =>
            b._id === selectedBill._id ? { ...b, ...updatedBill } : b
          )
        );
        setIsModalOpen(false);
        Swal.fire("Updated!", "Bill details updated successfully.", "success");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to update bill.", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This bill will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:5000/payments/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.success) {
            setBills((prev) => prev.filter((b) => b._id !== id));
            Swal.fire("Deleted!", "Your bill has been deleted.", "success");
          }
        } catch {
          Swal.fire("Error!", "Failed to delete bill.", "error");
        }
      }
    });
  };

  const handleDownloadReport = () => {
    const csv = [
      ["Username", "Email", "Amount", "Address", "Phone", "Date"],
      ...bills.map((b) => [
        b.username,
        b.userEmail,
        b.amount,
        b.address,
        b.phone,
        new Date(b.date).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `MyPayBills_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        My Pay Bills
      </h1>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
        <p>
          Total Bills Paid: <strong>{totalBills}</strong>
        </p>
        <p>
          Total Amount: <strong>৳ {totalAmount}</strong>
        </p>
        <button
          onClick={handleDownloadReport}
          className="btn btn-sm bg-blue-600 text-white"
        >
          Download Report
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="table w-full">
          <thead className="bg-blue-100">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No bills found.
                </td>
              </tr>
            ) : (
              bills.map((bill) => (
                <tr key={bill._id} className="hover:bg-blue-50">
                  <td>{bill.username}</td>
                  <td>{bill.userEmail}</td>
                  <td>৳ {bill.amount}</td>
                  <td>{bill.address}</td>
                  <td>{bill.phone}</td>
                  <td>{new Date(bill.date).toLocaleDateString()}</td>
                  <td className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleUpdate(bill)}
                      className="btn btn-sm bg-green-500 text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(bill._id)}
                      className="btn btn-sm bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedBill && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
              Update Bill
            </h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="number"
                name="amount"
                defaultValue={selectedBill.amount}
                required
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="address"
                defaultValue={selectedBill.address}
                required
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="phone"
                defaultValue={selectedBill.phone}
                required
                className="input input-bordered w-full"
              />
              <input
                type="date"
                name="date"
                defaultValue={selectedBill.date?.split("T")[0]}
                required
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className="btn bg-blue-600 text-white w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MyPayBills;
