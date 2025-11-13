const reviews = [
  {
    name: "Rahat H.",
    rating: 5,
    comment:
      "This platform made paying my utility bills super easy! Fast and secure.",
  },
  {
    name: "Sonia K.",
    rating: 4,
    comment:
      "Very convenient and user-friendly. I especially love the PDF receipts.",
  },
  {
    name: "Akash R.",
    rating: 5,
    comment:
      "Reliable and safe. Paying electricity and internet bills has never been easier!",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        What Our Users Say
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-md rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-700 mb-3">{review.comment}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold text-gray-800">{review.name}</span>
              <span className="text-yellow-400">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
