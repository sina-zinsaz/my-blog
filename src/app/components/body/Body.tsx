"use client";
import React from "react";
import { Box } from "@mui/material";
import Title from "./components/Title";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Posts from "./components/Posts";

export default function Body() {
  return (
    <Box my={4}>
      <Title />
      <Posts />
      <Projects />
      <AboutMe />
    </Box>
  );
}
