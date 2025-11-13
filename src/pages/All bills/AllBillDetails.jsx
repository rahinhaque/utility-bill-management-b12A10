import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BillDetails = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bill, setBill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/bills/${id}`)
      .then((res) => res.json())
      .then((data) => setBill(data))
      .catch((err) => console.error("Error fetching bill details:", err));
  }, [id]);

  if (!bill)
    return (
      <p className="text-center py-10 text-gray-500 text-lg font-medium">
        Loading bill details...
      </p>
    );

  const isCurrentMonth =
    new Date(bill.createdAt).getMonth() === new Date().getMonth();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePayBill = async (e) => {
    e.preventDefault();

    const formData = {
      billId: bill._id,
      userEmail: e.target.userEmail.value, 
      username: e.target.username.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      date: new Date().toISOString(),
      amount: bill.amount,
      additionalInfo: e.target.additionalInfo.value,
    };

    try {
      const res = await fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Payment successful!");
        closeModal();
      } else {
        toast.error(data.message || "Payment failed!");
      }
    } catch (err) {
      toast.error("Payment failed!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 relative">
      
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
        <div className="relative">
          <img
            src={bill.image}
            alt={bill.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h1 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            {bill.title}
          </h1>
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <p className="text-gray-600 font-medium">
              Category: <span className="text-gray-800">{bill.category}</span>
            </p>
            <p className="text-gray-600 font-medium">
              Location: <span className="text-gray-800">{bill.location}</span>
            </p>
            <p className="text-gray-600 font-medium">
              Date:{" "}
              <span className="text-gray-800">
                {new Date(bill.createdAt).toLocaleDateString()}
              </span>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">{bill.details}</p>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xl md:text-2xl font-semibold text-blue-600">
              Amount: ৳ {bill.amount}
            </p>

            <button
              disabled={!isCurrentMonth}
              onClick={openModal}
              className={`px-6 py-2 rounded-xl font-semibold transition ${
                isCurrentMonth
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isCurrentMonth
                ? "Pay Now"
                : "Only current month bills can be paid"}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-center border-t border-gray-200">
          <button
            onClick={() => navigate("/add-bills")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition shadow-md"
          >
            + Add More Bills Here
          </button>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Pay Bill</h2>
            <form onSubmit={handlePayBill} className="space-y-4">
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email || ""}
                placeholder="Email"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={bill._id}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
              <input
                type="number"
                value={bill.amount}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
              <textarea
                name="additionalInfo"
                placeholder="Additional info"
                className="w-full border rounded p-2"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold mt-2"
              >
                Pay Bill
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default BillDetails;
