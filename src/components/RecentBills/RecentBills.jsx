import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const RecentBills = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/recent-data")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.error("Error fetching recent bills:", err));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">
        Recent Bills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bills.map((bill) => (
          <div
            key={bill._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={bill.image}
              alt={bill.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {bill.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">Category:</span> {bill.category}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Location:</span> {bill.location}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(bill.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => navigate(`/bill/${bill._id}`)}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBills;
