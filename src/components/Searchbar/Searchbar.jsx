import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Searchbar() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Search for crypto..."
        id="fullWidth"
        margin="normal"
      />
    </Box>
  );
}

export default Searchbar;
