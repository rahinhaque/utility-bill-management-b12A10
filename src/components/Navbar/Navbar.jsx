import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { MoreVertical, Sun, Moon } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // ---------- Theme toggle state ----------
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    logOut().catch((err) => console.error(err));
  };

  return (
    <nav className="navbar bg-base-200 dark:bg-gray-900 border-b px-4 md:px-8 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="flex-1">
        <Link
          to="/"
          className="text-xl md:text-2xl font-semibold tracking-wide text-gray-800 dark:text-gray-100 hover:text-blue-600 transition"
        >
          <span className="text-blue-600">Utility</span> Bill Management
        </Link>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 dark:text-gray-200"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/bills"
          className={({ isActive }) =>
            `hover:text-blue-600 transition ${
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 dark:text-gray-200"
            }`
          }
        >
          Bills
        </NavLink>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        {user ? (
          <>
            <NavLink
              to="/my-pay-bills"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              My Pay Bills
            </NavLink>

            <div className="flex items-center gap-3">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-9 rounded-full border">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/FgWvYrW/avatar-demo.png"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-44"
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-primary font-medium"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `hover:text-blue-600 transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 dark:text-gray-200"
                }`
              }
            >
              Register
            </NavLink>
          </>
        )}
      </div>

      <div className="md:hidden flex items-center gap-2">
        {/* Theme toggle button on mobile */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        <button onClick={toggleMenu} className="btn btn-ghost btn-circle">
          <MoreVertical className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 dark:bg-gray-900 border-t shadow-md flex flex-col items-start px-6 py-4 space-y-3 md:hidden">
          <NavLink
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/bills"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Bills
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/my-pay-bills"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
                onClick={() => setMenuOpen(false)}
              >
                My Pay Bills
              </NavLink>
              <Link
                to="/profile"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                className="btn btn-sm btn-primary w-full"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
