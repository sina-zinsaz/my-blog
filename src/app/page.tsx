import { Box } from "@mui/material";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Blog",
  description: "create by Sina Zinsaz",
};

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
