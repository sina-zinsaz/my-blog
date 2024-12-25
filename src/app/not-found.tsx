"use client";

import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

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
      <Box
        sx={{
          position: "relative",
          height: "180px",
          mb: 2,
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: { xs: "182px", sm: "224px" },
            fontWeight: 900,
            color: "#030005",
            textTransform: "uppercase",
            textShadow: "-1px -1px 0px #8400ff, 1px 1px 0px #ff005a",
            letterSpacing: "-20px",
            margin: 0,
          }}
        >
          404
        </Typography>
      </Box>

      <Typography
        component="h2"
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: { xs: "24px", sm: "42px" },
          fontWeight: 700,
          color: "#fff",
          textTransform: "uppercase",
          textShadow: "0px 2px 0px #8400ff",
          letterSpacing: "13px",
        }}
      >
        Page not found
      </Typography>

      <Button
        variant="outlined"
        sx={{
          mt: 3,
          color: "#ff005a",
          borderColor: "#ff005a",
          fontFamily: "Montserrat, sans-serif",
          textTransform: "uppercase",
          fontWeight: 700,
          transition: "0.2s all",
          "&:hover": {
            color: "#8400ff",
            borderColor: "#8400ff",
          },
        }}
        onClick={() => router.push("/")}
      >
        Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
