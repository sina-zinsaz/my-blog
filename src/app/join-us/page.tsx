"use client";
import { Box, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <HomeRoundedIcon
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer" }}
          fontSize="large"
        />
        <Typography variant="h5">Sina Zinsaz</Typography>
      </Box>
    </Box>
  );
}
