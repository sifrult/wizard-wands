import { React } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import image from './assets/storefront.png';

function Site() {
    return (
        <div>
            <Box sx={{ fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>
                <h1 className="storefrontHeader">Welcome to Ollisander's! Enter to find your perfect wand</h1>
            </Box>
            <div className="storeFront">
                <img src={image} alt="Ollisander's Storefront" className="storefrontImg" usemap='#hotspots'/>
                <Link to='/Store'>
                    <div className="enterBtn" />
                </Link>
            </div>
        </div>
    )
}

export default Site
