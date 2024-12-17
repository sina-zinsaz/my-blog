"use client";
import { Box, Typography, Grid, Button, useTheme } from "@mui/material";
import React from "react";

export default function Body() {
  const theme = useTheme();
  return (
    <Box my={4}>
      <Box my={4}>
        <Typography variant="h2" textAlign="center" mb={-2}>
          Sina Zinsaz
        </Typography>
        <Box
          sx={{
            width: "260px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "230px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "200px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "180px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "150px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "120px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "90px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "60px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "30px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
        <Box
          sx={{
            width: "10px",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            margin: "10px auto",
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3" mb={6}>
          Posts
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "20px",
                  width: "70%",
                }}
              />
              <Typography variant="body2" textAlign="center" mt={2} width="70%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente vero voluptatem iste numquam non excepturi, est illo
                autem? Repellat, ex animi maiores.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ_2.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "20px",
                  width: "70%",
                }}
              />
              <Typography variant="body2" textAlign="center" mt={2} width="70%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente vero voluptatem iste numquam non excepturi, est illo
                autem? Repellat, ex animi maiores.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ_3.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "20px",
                  width: "70%",
                  p: 1,
                }}
              />
              <Typography variant="body2" textAlign="center" mt={2} width="70%">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente vero voluptatem iste numquam non excepturi، est illo
                autem? Repellat، ex animi maiores.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h3" my={6}>
          Project
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "50%",
                  width: "50%",
                  p: 1,
                }}
              />
              <Typography variant="body1" textAlign="center" mt={2}>
                Project 1
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ_2.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "50%",
                  width: "50%",
                  p: 1,
                }}
              />
              <Typography variant="body2" textAlign="center" mt={2}>
                Project 2
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                component="img"
                src="/images/logoZ.png"
                sx={{
                  background:
                    theme.palette.mode === "dark" ? "#F2F2F2" : "#E0E0E0",
                  borderRadius: "50%",
                  width: "50%",
                  p: 1,
                }}
              />
              <Typography variant="body1" textAlign="center" mt={2}>
                Project 3
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
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
            and debugging websites to create modern and user-friendly
            experiences. Dedicated to delivering high-quality work with
            attention to detail and a passion for solving challenges.
          </Typography>
          <Button
            href="/Resume.pdf"
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
    </Box>
  );
}
