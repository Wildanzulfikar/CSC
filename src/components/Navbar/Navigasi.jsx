import React from "react";

function Navigasi() {
  return (
    <ul className="flex gap-10 text-white font-semibold">
      <li>
        <a href="../Home/Home.jsx" className="hover:text-yellow-400">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
      </li>
      <li>
        <a href="#divisi" className="hover:text-yellow-400">
          Divisi
        </a>
      </li>
      <li>
        <a
          href="../Contacts/ContantContacts.jsx"
          className="hover:text-yellow-400"
        >
          Contact Us
        </a>
      </li>
    </ul>
  );
}

export default Navigasi;
