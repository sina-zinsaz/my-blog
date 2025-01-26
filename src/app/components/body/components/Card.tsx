import { CardProps } from "@/app/types/CardProps";
import { Box, Typography, Link } from "@mui/material";
import React from "react";

export default function Card({
  imageSrc,
  title,
  description,
  isCircle,
  link,
}: CardProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          width: isCircle ? "100%" : "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          sx={{
            textDecoration: "none",
            display: "block",
          }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            component="img"
            src={imageSrc}
            sx={{
              background: (theme) =>
                theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
              borderRadius: "20px",
              width: isCircle ? "50%" : "70%",
              margin: "0 auto",
              display: "block",
              p: 1,
            }}
          />
        </Link>
      </Box>
      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        width={isCircle ? "auto" : "70%"}
      >
        <Link
          sx={{ textDecoration: "none" }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title || description}
        </Link>
      </Typography>
    </Box>
  );
}
