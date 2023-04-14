import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li>
            <Link to="/Store">
              Store
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              Cart (NOT WORKING YET)
            </Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/Store">
              Store
            </Link>
          </li>
          <li>
            <Link to="/Login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <h1>
          Ollisander's
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
