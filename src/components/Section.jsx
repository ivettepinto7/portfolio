import React from "react";
import { Box, Typography } from "@mui/material";

const Section = ({children, id, title}) => {
  return (
    <Box id={id} mx="5vw" my="3rem">
      <Typography variant="h3" bgcolor="#1D5D9B" color="white" letterSpacing="0.4rem" textAlign="center"><b>{title}</b></Typography>
      {children}
    </Box>
  );
};

export default Section;
