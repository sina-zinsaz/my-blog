import { lineWidths } from "@/app/constants/lineWidths";
import { Box, Typography } from "@mui/material";
import React from "react";
import LineEffect from "./LineEffect";

export default function Title() {
  return (
    <Box my={4}>
      <Typography variant="h2" textAlign="center" mb={-2}>
        Sina Zinsaz
      </Typography>
      {lineWidths.map((width) => (
        <LineEffect key={width} width={width} />
      ))}
    </Box>
  );
}
