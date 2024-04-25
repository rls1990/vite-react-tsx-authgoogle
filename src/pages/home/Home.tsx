/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  createTheme,
} from "@mui/material";

const Home = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to our app!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Button variant="contained" color="primary">
          Explore Now
        </Button>
      </Container>
    </>
  );
};

export default Home;
