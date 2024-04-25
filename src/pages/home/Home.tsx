/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography, Button } from "@mui/material";
import "./Home.css";
import NavigationBar from "../../components/navigationbar/NavigationBar";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Container maxWidth="md" className="home">
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
