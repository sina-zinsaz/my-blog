import { Box, Link } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const socialLinks = [
  { href: "https://www.linkedin.com/in/sinazinsaz/", icon: LinkedInIcon },
  { href: "https://github.com/sina-zinsaz", icon: GitHubIcon },
  { href: "https://t.me/SINA_END", icon: TelegramIcon },
  { href: "https://www.youtube.com/@sinarage", icon: YouTubeIcon },
];

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
        src="/images/profile.jpg"
        alt="Profile"
        sx={{ width: "5%", borderRadius: "50%" }}
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
