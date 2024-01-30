import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>EShop</h1>
        </Link>
      </div>

      <div className="navigation">
        <Link to="/cart">
          <ShoppingCartIcon
            style={{ fontSize: "35px", color: "saddlebrown" }}
          />
        </Link>
        <p style={{ color: "white", fontSize: "20px" }}>{cartItems.length}</p>
      </div>
    </nav>
  );
}

export default Navbar;
