import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 p-2 text-gray-300">
      <div className="flex justify-between items-center">
        <ul className="flex justify-around items-center">
          <li className="text-2xl mx-1 font-bold">Brand Name</li>
          <li className="text-xl mx-1">Home</li>
          <li className="text-xl mx-1">About</li>
          <li className="text-xl mx-1">Contact</li>
        </ul>
        <div className="border rounded-lg p-1 border-gray-300 text-xl">
          Login/Signup
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
