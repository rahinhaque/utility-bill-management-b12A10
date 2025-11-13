import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Bills() {
  const [bills, setBills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false); // <-- loading state
  const navigate = useNavigate();

  const categories = [
    "All",
    "Electricity",
    "Gas",
    "Water",
    "Internet",
    "Other",
  ];

  useEffect(() => {
    const fetchBills = async () => {
      try {
        setLoading(true);
        const url =
          selectedCategory === "All"
            ? "https://utility-bill-management-server-three.vercel.app/bills"
            : `https://utility-bill-management-server-three.vercel.app/bills?category=${selectedCategory}`;

        const res = await fetch(url);
        const data = await res.json();
        setBills(data);
      } catch (err) {
        console.error("Error fetching bills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, [selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 text-primary">
        All Bills
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-14 h-14 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bills.length > 0 ? (
            bills.map((bill) => (
              <div
                key={bill._id}
                className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition"
              >
                <img
                  src={bill.image}
                  alt={bill.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h2 className="text-xl font-semibold mt-3 text-gray-800">
                  {bill.title}
                </h2>
                <p className="text-gray-500">{bill.category}</p>
                <p className="text-gray-600">{bill.location}</p>
                <p className="text-lg font-bold mt-2 text-blue-600">
                  ৳ {bill.amount}
                </p>
                <button
                  onClick={() => navigate(`/all-bills/${bill._id}`)}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition font-medium"
                >
                  See Details
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 font-medium">
              No bills found for this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Bills;
