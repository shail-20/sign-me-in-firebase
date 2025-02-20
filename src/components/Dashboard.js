import React from "react";

const Dashboard = ({ user, handleLogout }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user.displayName}!</h1>
      <p className="text-lg">{user.email}</p>
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full mt-4"
      />
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
