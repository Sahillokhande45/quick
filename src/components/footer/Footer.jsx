import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">MyWebsite</h1>
          <p className="mt-3 text-gray-400">
            Helping you build modern, animated, responsive websites.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </motion.ul>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-400">Email: support@mywebsite.com</p>
          <p className="text-gray-400 mt-2">Phone: +91 9876543210</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5"
      >
        © {new Date().getFullYear()} MyWebsite — All Rights Reserved
      </motion.div>
    </footer>
  );
}