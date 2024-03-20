import React from "react";
import { NavLink, useMatch } from 'react-router-dom';

function CustomNavLink({ to, children }) {
  const isActive = useMatch(to);

  return (
    <NavLink to={to} className={isActive ? "active nav-item nav-link" : "nav-item nav-link"}>
    <span className={isActive ? "underline" : ""}>{children}</span>
  </NavLink>
  );
}



const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <CustomNavLink className="navbar-brand" to={"/"}>
          <img src="/img/01.jpg" alt="leo" className="logo" />
        </CustomNavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <CustomNavLink to={"/"}>Home</CustomNavLink>
            <CustomNavLink to={"/about"}>About</CustomNavLink>
            <CustomNavLink to={"/Address"}>Address</CustomNavLink>
            <CustomNavLink to={"/contact"}>Services</CustomNavLink>
          </ul>
          
          <CustomNavLink to={"/LoginPage"}>
          <button className="btn btn-primary px-3">Login</button>
          </CustomNavLink>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
