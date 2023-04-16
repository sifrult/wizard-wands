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
    nav: {
        backgroundColor: '#1c2e4a',
        padding: "10px",
    },
    navlinks: {
      marginRight: 20,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    header: {
        marginLeft: theme.spacing(0),
        display: "flex",
        color: "#d4af37",
        fontFamily: "Brush Script MT, Brush Script Std, cursive",
        fontSize: "50px",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(10),
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
            <Toolbar>
                <Typography variant="h4" component="div" className={classes.header}>
                    Ollisander's
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/Store" className={classes.link}>
                        Store
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
        <AppBar position="static" className={classes.nav}>
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" component="div" className={classes.header}>
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
