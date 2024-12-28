"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <Box
      m="2rem 2rem 0.5rem 2rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <HomeRoundedIcon
          onClick={() => router.push("/")}
          sx={{ cursor: "pointer" }}
          fontSize="large"
        />
        <Typography variant="h5">Sina Zinsaz</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width="50%"
        mt={14}
      >
        <Typography variant="h4" gutterBottom>
          Join Our Community!
        </Typography>
        <Typography paragraph>
          Hello, dear friend! This is a place to share ideas, experiences, and
          stories that make life more beautiful. If you’re interested in the
          topics I love or want to join me on this journey, I’d be thrilled to
          have you as part of this friendly community.
        </Typography>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          By joining my blog:
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", padding: 0 }} mb={1}>
          {[
            "Be the first to know about new posts.",
            "Share your thoughts and ideas.",
            "Help me make this space even better and more enriching.",
          ].map((item, index) => (
            <Box
              component="li"
              key={index}
              display="flex"
              alignItems="center"
              mb={1}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  marginRight: "0.5rem",
                }}
              />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          I’m looking forward to having you here!
        </Typography>
        <Typography>
          Joining or following is just one click away. Let’s make this journey
          more beautiful together. ❤️
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} my={8} width="50%">
        <TextField label="Full Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" />
        <Box display="flex" justifyContent="space-between" width="100%">
          <TextField
            label="Text for me :)"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ mr: 2 }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Button variant="contained" sx={{ py: 2 }}>
              <FileDownloadRoundedIcon />
            </Button>
            <Button variant="contained" sx={{ py: 2 }}>
              <ClearRoundedIcon />
            </Button>
          </Box>
        </Box>
        <Button variant="contained">
          Send <ArrowRightAltRoundedIcon />
        </Button>
      </Box>
    </Box>
  );
}
