import React from "react";
import { Link } from "react-router-dom";
import NavbarRoutes from "../routes/NavbarRoutes";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/science">Science</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/sports">Sports</Link>
      </nav>
      <NavbarRoutes />
    </>
  );
};

export default Navbar;
