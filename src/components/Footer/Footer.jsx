import { Link } from "react-router";
import {
  Droplet,
  Zap,
  Wifi,
  Flame,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6"; 

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 text-gray-700 mt-auto overflow-hidden">
      <div className="absolute -top-10 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-12 text-blue-200 opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86C669.45-3,836,6,1000,43.48c130,29.35,260,69.14,400,83.39V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
            <Zap className="w-6 h-6 text-blue-600" />
            Utility Bill Management
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            A modern, secure and easy-to-use web app to manage and pay all your
            monthly bills — Electricity, Gas, Water, and Internet — in one
            place.
          </p>

          <div className="flex gap-3 mt-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Zap size={18} />
            </div>
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Droplet size={18} />
            </div>
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Flame size={18} />
            </div>
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <Wifi size={18} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bills"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Bills
              </Link>
            </li>
            <li>
              <Link
                to="/pay-bills"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                My Pay Bills
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Follow us on social platforms for updates, reminders, and news.
          </p>

          <div className="flex gap-4 mb-5">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2.5 rounded-full transition-all duration-200"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2.5 rounded-full transition-all duration-200"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2.5 rounded-full transition-all duration-200"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://threads.net"
              target="_blank"
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-2.5 rounded-full transition-all duration-200"
            >
              <FaThreads size={18} />
            </a>
          </div>

          <div className="join">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered join-item w-full md:w-auto"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-blue-700 text-white text-center py-4 mt-6">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M321.39,56.44C378.39,45.65,434.55,26.31,492.39,14.58C669.45-3,836,6,1000,43.48c130,29.35,260,69.14,400,83.39V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            ></path>
          </svg>
        </div>

        <p className="relative z-10 text-sm tracking-wide">
          © 2025{" "}
          <span className="font-semibold text-white">
            Utility Bill Management
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
