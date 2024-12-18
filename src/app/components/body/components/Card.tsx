import { CardProps } from "@/app/types/CardProps";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Card({
  imageSrc,
  title,
  description,
  isCircle,
}: CardProps) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        component="img"
        src={imageSrc}
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
          borderRadius: isCircle ? "50%" : "20px",
          width: isCircle ? "50%" : "70%",
          p: 1,
        }}
      />
      <Typography
        variant="body2"
        textAlign="center"
        mt={2}
        width={isCircle ? "auto" : "70%"}
      >
        {title || description}
      </Typography>
    </Box>
  );
}
