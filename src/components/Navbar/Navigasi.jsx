import React from "react";
import { Link } from "react-router-dom";

function Navigasi() {
  return (
    <ul className="flex gap-10 text-white font-semibold">
      <li>
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-yellow-400">
          About
        </Link>
      </li>
      <li>
        <a href="#divisi" className="hover:text-yellow-400">
          Divisi
        </a>
      </li>
      <li>
        <Link to="/contacts" className="hover:text-yellow-400">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default Navigasi;
