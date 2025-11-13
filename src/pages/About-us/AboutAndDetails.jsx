import React from "react";

const AboutAndDetails = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          About Smart Bills
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Smart Bills is your one-stop digital platform for managing all kinds
          of monthly utility bills — electricity, gas, water, internet, and even
          tuition fees. Our goal is to simplify how people handle their payments
          by providing a fast, secure, and user-friendly dashboard where
          everything stays organized and transparent.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              💳 Easy Payments
            </h3>
            <p className="text-gray-600 text-sm">
              Pay all your bills instantly through one dashboard — no more
              queueing or delays.No hassels.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              📊 Smart Tracking
            </h3>
            <p className="text-gray-600 text-sm">
              Get real-time Updates and Access your full payment history
              whenever you need it.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              🔒 Secure System
            </h3>
            <p className="text-gray-600 text-sm">
              Your information and transactions are encrypted and securely
              stored.Payments are sercured,No worry and pay bills without tensions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://i.ibb.co.com/zV3djN10/free-photo-of-collaborative-team-meeting-in-modern-office.jpg

"
          alt="Our Team"
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-blue-600">Who We Are?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We’re a small but passionate team of developers, designers, and
            thinkers dedicated to making bill management effortless for
            everyone. From students paying tuition to families handling monthly
            utilities — we aim to make your financial routines smoother,
            smarter, and more transparent.Make Your Bill payment with Our Site.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple: empower users to stay organized, save time,
            and avoid missed payments — all through one clean, responsive
            platform.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutAndDetails;
