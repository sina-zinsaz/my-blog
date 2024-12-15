import { Box } from "@mui/material";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Box m="2rem 2rem 0.5rem 2rem">
        <Head />
        <Body />
        <Footer />
      </Box>
    </Box>
  );
}
