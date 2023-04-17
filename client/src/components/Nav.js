import React from "react";
import Auth from "../utils/auth";
import {
  AppBar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  nav: {
    backgroundColor: '#1c2e4a'
  },
  header: {
    color: "#d4af37",
    fontFamily: "Brush Script MT, Brush Script Std, cursive",
    fontSize: "50px",
    marginLeft: '5%'
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",

    "&:hover": {
      color: "#d4af37",
      borderBottom: "1px solid #d4af37",
    },
  },
}));

function Nav() {
  const classes = useStyles();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <AppBar position="static" className={classes.nav}>
          <CssBaseline />
          <div className="header">
            <div>
              <Typography variant="h4" component="div" className={classes.header}>
                Ollisander's
              </Typography>
            </div>
            <div className="headerLinks">
              <Link to="/Store" className={classes.link}>
                Store
              </Link>
              <a href="/" className={classes.link} onClick={() => Auth.logout()}>
                Logout
              </a>
            </div>
          </div>
        </AppBar>
      );
    } else {
      return (
        <AppBar position="static" className={classes.nav}>
          <CssBaseline />
          <div className="header">
            <div>
              <Typography variant="h4" component="div" className={classes.header}>
                Ollisander's
              </Typography>
            </div>
            <div className="headerLinks">
              <Link to="/Store" className={classes.link}>
                Store
              </Link>
              <Link to="/Login" className={classes.link}>
                Login
              </Link>
              <Link to="/Signup" className={classes.link}>
                Signup
              </Link>
            </div>
          </div>
        </AppBar>
      );
    }
  }

  return (
    <nav>
      {showNavigation()}
    </nav>

  );
}

export default Nav;
