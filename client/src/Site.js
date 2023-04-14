import { React } from "react";
import image from './assets/storefront.png'
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";


function Site() {
    useEffect(() => {
        document.body.style.backgroundColor = "black";
      }, []);

    return (
        <Box component="span" sx={{
            width: '100%',
            height: 300,
            backgroundColor: '#ff5722',
        }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ff5722'}}>
                <h1>Welcome to Ollisander's! Enter to find your perfect wand</h1>
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <img src={image} alt="Appfront" style={{ width: '50%' }} />


                <Link to='/Store'>
                    <Button
                        sx={{
                            position: 'absolute',
                            top: '65%',
                            left: '48.5%',
                            transform: 'translate(-50%, -50%)',
                            height: '45%',
                            width: '8%',
                            backgroundColor: 'transparent',
                            border: 'none',
                            padding: 0,
                        }}
                    />
                </Link>
            </Box>

        </Box>
    )
};

export default Site