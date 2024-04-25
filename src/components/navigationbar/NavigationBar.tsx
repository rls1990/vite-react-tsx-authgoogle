import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const NavigationBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavigationBar;
