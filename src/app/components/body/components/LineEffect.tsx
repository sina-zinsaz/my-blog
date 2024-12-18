import { Box } from "@mui/material";
import React from "react";

export default function LineEffect({ width }: { width: string }) {
  return (
    <Box
      sx={{
        width,
        height: "2px",
        backgroundColor: (theme) => theme.palette.primary.main,
        margin: "10px auto",
      }}
    />
  );
}
