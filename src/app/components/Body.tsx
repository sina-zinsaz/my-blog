import { Box, Typography, Grid } from "@mui/material";
import React from "react";

export default function Body() {
  return (
    <Box my={4}>
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
                  background: "#F2F2F2",
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
                  background: "#F2F2F2",
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
                  background: "#F2F2F2",
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
      {/* پروژه‌ها */}
      {/* درباره من */}
    </Box>
  );
}
