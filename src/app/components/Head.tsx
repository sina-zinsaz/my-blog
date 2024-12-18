import { Box, Link } from "@mui/material";
import { socialLinks } from "../constants/socialLinks";

export default function Head() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="assets/images/profile.jpg"
        alt="Profile"
        sx={{ width: { xs: "15%", md: "5%" }, borderRadius: "50%" }}
      />
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
