import electricityImg from "../../assets/Electric.png";
import gasImg from "../../assets/Gas.png";
import waterImg from "../../assets/Water.png";
import internetImg from "../../assets/Internet.png";
import { Link } from "react-router";

const categories = [
  {
    id: 1,
    title: "Electricity",
    description: "Pay your electric bills easily and avoid late fees.",
    img: electricityImg,
  },
  {
    id: 2,
    title: "Gas",
    description: "Manage your gas connections and pay bills securely.",
    img: gasImg,
  },
  {
    id: 3,
    title: "Water",
    description: "Stay on top of your water usage and monthly payments.",
    img: waterImg,
  },
  {
    id: 4,
    title: "Internet",
    description: "Pay broadband and Wi-Fi bills fast and hassle-free.",
    img: internetImg,
  },
];

const Category = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">
        Bill Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative h-[250px] rounded-2xl overflow-hidden shadow-md group"
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
              <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm md:text-base opacity-90">
                {category.description}
              </p>
              <Link
                to="/add-bills"
                className="mt-4 bg-primary px-4 py-2 rounded-lg text-white font-medium hover:bg-primary/90 transition"
              >
                Pay Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
