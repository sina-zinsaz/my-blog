import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";

export default function AboutMe() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3" my={6}>
        About Me
      </Typography>
      <Box
        width="100%"
        borderRadius="20px"
        sx={{
          border: `${
            theme.palette.mode === "dark" ? "#F2F2F2" : "#000"
          } 1px solid`,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: "20px", md: "40px" },
        }}
      >
        <Typography variant="body1" sx={{ width: { xs: "100%", md: "50%" } }}>
          A Front-End Developer from Kashan, focused on designing, developing,
          and debugging websites to create modern and user-friendly experiences.
        </Typography>
        <Button
          href="assets/pdf/Resume.pdf"
          download="SinaZinsaz_Resume.pdf"
          sx={{
            background: theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
            color: "black",
            px: { xs: 2, md: 4 },
            py: 1,
            mt: { xs: 3, md: 0 },
          }}
        >
          My Resume
        </Button>
      </Box>
    </Box>
  );
}
