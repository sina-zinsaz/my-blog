import { posts } from "@/app/constants/posts";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function Posts() {
  return (
    <Box>
      <Typography variant="h3" mb={6}>
        Posts
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card imageSrc={post.imageSrc} description={post.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
