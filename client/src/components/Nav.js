import React from "react";
import Auth from "../utils/auth";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h6" component="div" className={classes.navlinks}>
                    Ollisander's
                </Typography>
            </Toolbar>

        </AppBar>
        // <ul className="flex-row">
        //   <li>
        //     <Link to="/Store">
        //       Store
        //     </Link>
        //   </li>
        //   <li>
        //     <Link to="/Cart">
        //       Cart (NOT WORKING YET)
        //     </Link>
        //   </li>
        //   <li>
        //     <a href="/" onClick={() => Auth.logout()}>
        //       Logout
        //     </a>
        //   </li>
        // </ul>
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
