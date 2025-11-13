import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBill = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    image: "",
    location: "",
    details: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://utility-bill-management-server-three.vercel.app/bills",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.insertedId) {
        toast.success("Bill added successfully!");
        setFormData({
          title: "",
          category: "",
          amount: "",
          image: "",
          location: "",
          details: "",
          date: "",
        });
      } else {
        toast.error("Failed to add bill.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">
        Add a New Bill
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Bill Title"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
          required
        >
          <option value="">Select Category</option>
          <option value="Electricity">Electricity</option>
          <option value="Gas">Gas</option>
          <option value="Water">Water</option>
          <option value="Internet">Internet</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="month"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount (৳)"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Bill Details"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition"
        >
          Add Bill
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddBill;
