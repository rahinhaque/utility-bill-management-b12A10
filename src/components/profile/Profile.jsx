import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-gray-600">
        <h2 className="text-xl font-semibold">No user logged in</h2>
        <p className="mt-2 text-sm">
          Please log in to view your profile details.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-md p-6 text-center">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full ring ring-blue-400 ring-offset-base-100 ring-offset-2">
            <img
              src={user.photoURL || "https://i.ibb.co/FgWvYrW/avatar-demo.png"}
              alt="User Avatar"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          {user.displayName || "Unnamed User"}
        </h2>
        <p className="text-gray-600 mt-2">{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
