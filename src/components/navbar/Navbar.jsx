import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Services", path: "/services" },
    { name: "US Health Care", path: "/us-health-care" }, 
    { name: "Career", path: "/career" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">MyWebsite</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-400 transition ${
                  pathname === item.path ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block w-full ${
                  pathname === item.path ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
