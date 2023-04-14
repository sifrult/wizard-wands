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
        color: "lavender",
        borderBottom: "1px solid white",
      },
    },
  }));

function Nav() {
    const classes = useStyles();
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" component="div" className={classes.navlinks}>
                    Ollisander's
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/Store" className={classes.link}>
                        Store
                    </Link>
                    <Link to="/Cart" className={classes.link}>
                        Cart (NOT WORKING YET)
                    </Link>
                    <a href="/" className={classes.link} onClick={() => Auth.logout()}>
                        Logout
                    </a>
                </div>
            </Toolbar>
        </AppBar>
      );
    } else {
      return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" component="div" className={classes.navlinks}>
                    Ollisander's
                </Typography>
                <div className={classes.navlinks}>
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
            </Toolbar>
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