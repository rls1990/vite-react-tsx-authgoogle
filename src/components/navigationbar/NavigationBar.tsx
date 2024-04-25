import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavigationBar = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleThemeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <IconButton
            sx={{ ml: "auto" }}
            onClick={toggleThemeMode}
            color="inherit"
          >
            {mode === "dark" ? (
              <Brightness7Icon color="inherit" />
            ) : (
              <Brightness4Icon color="action" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
