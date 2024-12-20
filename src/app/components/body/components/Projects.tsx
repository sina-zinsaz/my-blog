import { projects } from "@/app/constants/projects";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "./Card";

export default function Projects() {
  return (
    <Box>
      <Typography variant="h3" my={6}>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              imageSrc={project.imageSrc}
              title={project.title}
              link={project.link}
              isCircle
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
