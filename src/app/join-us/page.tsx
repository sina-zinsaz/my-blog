"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    text: string;
    file: File | null | undefined;
  }>({
    fullName: "",
    email: "",
    text: "",
    file: null,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    file: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: "File size should not exceed 5MB.",
      }));
    } else {
      setFormData((prev) => ({ ...prev, file }));
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const handleFileRemove = () => {
    setFormData((prev) => ({ ...prev, file: null }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: "", email: "", file: "" };

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
      isValid = false;
    } else if (/\d/.test(formData.fullName) || formData.fullName.length > 50) {
      newErrors.fullName =
        "Full Name should not contain numbers and must be under 50 characters.";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };
  return (
    <Box
      m={isMobile ? "1rem" : "2rem"}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Header Section */}
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
        <Typography variant="h5" textAlign="center">
          Sina Zinsaz
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width={isMobile ? "100%" : "50%"}
        mt={isMobile ? 8 : 14}
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

      {/* Form Section */}
      {/* <Box
        display="flex"
        flexDirection="column"
        gap={2}
        my={8}
        width={isMobile ? "100%" : "50%"}
      >
        <TextField label="Full Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          width="100%"
        >
          <TextField
            label="Text for me :)"
            multiline
            rows={isMobile ? 2 : 4}
            variant="outlined"
            fullWidth
            sx={{ mb: isMobile ? 2 : 0, mr: isMobile ? 0 : 2 }}
          />
          <Box
            display="flex"
            flexDirection={isMobile ? "row" : "column"}
            justifyContent="space-between"
            gap={isMobile ? 2 : 0}
          >
            <Button variant="contained" sx={{ py: 2 }}>
              <FileDownloadRoundedIcon />
            </Button>
            <Button variant="contained" sx={{ py: 2 }}>
              <ClearRoundedIcon />
            </Button>
          </Box>
        </Box>
        <Button variant="contained" fullWidth>
          Send <ArrowRightAltRoundedIcon />
        </Button>
      </Box> */}
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        my={8}
        width={isMobile ? "100%" : "50%"}
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Share your thoughts (Optional)"
          multiline
          rows={isMobile ? 2 : 4}
          variant="outlined"
          fullWidth
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          width="100%"
        >
          <Button variant="contained" component="label" sx={{ py: 2 }}>
            <FileDownloadRoundedIcon />
            Upload File
            <input
              type="file"
              hidden
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
            />
          </Button>
          <Button
            variant="contained"
            sx={{ py: 2 }}
            onClick={handleFileRemove}
            disabled={!formData.file}
          >
            <ClearRoundedIcon />
            Remove File
          </Button>
        </Box>
        {errors.file && (
          <Typography color="error" variant="body2">
            {errors.file}
          </Typography>
        )}
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Send <ArrowRightAltRoundedIcon />
        </Button>
      </Box>
    </Box>
  );
}
