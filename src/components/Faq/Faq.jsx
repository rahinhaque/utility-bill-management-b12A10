import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can I pay my electricity bill online?",
    answer:
      "You can select the Electricity category, choose your bill, and click the 'Pay Now' button. Payment is instant and secure.",
  },
  {
    question: "Can I pay multiple utility bills at once?",
    answer:
      "Currently, you can pay bills individually. Bulk payment is coming soon in the next update.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes. We use industry-standard encryption and secure payment gateways to protect your data.",
  },
  {
    question: "Can I download a receipt for my payment?",
    answer:
      "Absolutely! After successful payment, a PDF receipt is available for download in your profile.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-base-200 py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 cursor-pointer transition hover:shadow-lg"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
