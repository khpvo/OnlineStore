import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ numberOfItemsInCart }) {
  const location = useLocation();
  const activeClassName = "nav-link active";
  const inactiveClassName = "nav-link";
  const StyleLink = ({ isActive }) =>
    isActive ? activeClassName : inactiveClassName;
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light mb-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mukutsuri Swimsuits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className={StyleLink} aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={StyleLink}>
                Store
              </NavLink>
            </li>
          </ul>
          <ul className="d-flex navbar-nav mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/" className={StyleLink}>
                Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={StyleLink}>
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              {location.pathname === "/" || location.pathname === '/products' ? (
                <NavLink to="/cart" className={StyleLink}>
                  <p className="h6">
                    Cart{" "}
                    <span class="badge bg-warning text-dark">
                      {numberOfItemsInCart}
                    </span>
                  </p>
                </NavLink>
              ) : (
                <NavLink to="/products" className={StyleLink}>
                  <button className="h6 btn btn-sm btn-info">
                    Continue Shopping
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
