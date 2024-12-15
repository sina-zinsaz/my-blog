import { Box } from "@mui/material";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Box m={4}>
        <Head />
        <Body />
        <Footer />
      </Box>
    </Box>
  );
}
