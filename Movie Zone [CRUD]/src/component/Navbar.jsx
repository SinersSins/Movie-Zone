import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"
const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/add">Add Movie</Link>
      </div>
    </div>
  );
};

export default Navbar;
