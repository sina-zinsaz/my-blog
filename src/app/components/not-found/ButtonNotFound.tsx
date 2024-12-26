import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ButtonNotFound() {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      sx={{
        mt: 3,
        color: "#ff005a",
        borderColor: "#ff005a",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "uppercase",
        fontWeight: 700,
        transition: "0.2s all",
        "&:hover": {
          color: "#8400ff",
          borderColor: "#8400ff",
        },
      }}
      onClick={() => router.push("/")}
    >
      Homepage
    </Button>
  );
}
