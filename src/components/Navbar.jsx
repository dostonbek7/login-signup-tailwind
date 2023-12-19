import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-neutral-400 text-white py-3">
      <div className="max-container flex md:flex-row md:justify-between  flex-col items-center gap-5">
        <a href="/" className=" text-lg md:text-2xl animation hover:opacity-70 active:opacity-50">
          My Kitchen
        </a>
        <nav className="flex md:flex-row items-center flex-col gap-3">
          <p className="text-lg md:text-xl">Welcome, User</p>
          <div className="flex gap-3">
            <Link to='signup' className="px-2 py-1 md:px-4 md:py-2 border rounded-md bg-orange-400 animation hover:bg-orange-700 text-white">
              Signup
            </Link>
            <Link
              to="login"
              className="px-2 py-1 md:px-4 md:py-2 border rounded-md bg-green-600 animation hover:bg-green-800 text-white"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
