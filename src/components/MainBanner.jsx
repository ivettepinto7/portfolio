import React from "react";
import { Grid, Typography } from "@mui/material";
import PortfolioPhoto from "../assets/portfolio-photo.jpg";

const MainBanner = () => {
  return (
    <Grid
      id="home"
      container
      sx={{
        backgroundColor: "#F4D160",
        textAlign: "center",
        paddingY: "3rem",
      }}
    >
      <Grid item xs={12} md={6} m="auto">
        <img
          style={{
            height: "12rem",
            borderRadius: "20%",
            border: "0.2rem solid #75C2F6",
          }}
          src={PortfolioPhoto}
          alt="Portfolio photo"
        />
        <Typography variant="h4">Ivette Carolina Pinto León</Typography>
        <hr style={{ width: "70%" }} />
        <Typography sx={{ letterSpacing: "0.5rem" }} variant="h6">
          Software Developer
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} m="auto">
        <Typography variant="h4"><b>About me</b></Typography>
        <Typography variant="p">
          Hi! I'm Ivette, an enthusiast for quality software development and
          passionate about programming. I'm currently in my last year of
          undergraduate studies in informatics engineering
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainBanner;
