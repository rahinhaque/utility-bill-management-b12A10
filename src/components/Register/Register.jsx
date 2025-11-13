
import { use, useState } from "react";
import { Link, useNavigate } from "react-router";

import {
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

   
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      setError(
        "Password must contain at least 1 uppercase, 1 lowercase letter, and be 6+ characters long."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name, photoURL: photo });
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch(() => setError("Failed to register. Try again."));
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch(() => setError("Google login failed"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-lg bg-base-100 border">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Utility Bill Management – Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL (optional)"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input input-bordered w-full"
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
