import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <>
      <title>Merchant Form</title>
      <div className="header">
        <NavLink aria-current="page" to="/" className="logo">
          NewBusiness
        </NavLink>
        <div className="header-right">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/Tab">
            Table
          </NavLink>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
};
export default Nav;
