"use client";
import { Box, Link, keyframes } from "@mui/material";
import { socialLinks } from "../constants/socialLinks";

const colorChange = keyframes`
  0% { border-color: red; }
  25% { border-color: blue; }
  50% { border-color: green; }
  75% { border-color: orange; }
  100% { border-color: red; }
`;

export default function Head() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          component="img"
          src="assets/images/profile.jpg"
          alt="Profile"
          sx={{ width: { xs: "15%", md: "10%" }, borderRadius: "50%" }}
        />
        <Link
          href="#"
          sx={{
            textDecoration: "none",
            ml: 2,
            border: "2px solid",
            padding: "4px 12px",
            borderRadius: "8px",
            animation: `${colorChange} 4s infinite`,
          }}
        >
          Join Us
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {socialLinks.map(({ href, icon: Icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            <Icon fontSize="large" />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
