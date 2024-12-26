"use client";

import { Box } from "@mui/material";
import ButtonNotFound from "./components/not-found/ButtonNotFound";
import MessageNotFound from "./components/not-found/MessageNotFound";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#030005",
        textAlign: "center",
      }}
    >
      <MessageNotFound />
      <ButtonNotFound />
    </Box>
  );
};

export default NotFound;
