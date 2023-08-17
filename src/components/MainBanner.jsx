import React from "react";
import { Box, Typography } from "@mui/material";
import PortfolioPhoto from "../assets/portfolio-photo.jpg";

const MainBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#35155D",
        textAlign: 'center',
        color: "white",
      }}
    >
      <img
        style={{
          height: "12rem",
          borderRadius: "20%",
          border: "0.2rem solid #8CABFF",
        }}
        src={PortfolioPhoto}
        alt="Portfolio photo"
      />
      <Typography variant="h5">Ivette Carolina Pinto León</Typography>
      <hr style={{ color: "8CABFF", width: "70vw" }} />
      <Typography sx={{ letterSpacing: '0.5rem' }} variant="h6">Software Developer</Typography>
    </Box>
  );
};

export default MainBanner;
