import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface DarkModeSwitchProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeSwitch: FC<DarkModeSwitchProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => {
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleDarkMode}
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        color: theme.palette.text.primary,
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default DarkModeSwitch;
