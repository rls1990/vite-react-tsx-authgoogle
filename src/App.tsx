import NavigationBar from "./components/navigationbar/NavigationBar";
import ThemeProv from "./components/theme/ThemeProv";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <ThemeProv>
        <NavigationBar />
        <Routing />
      </ThemeProv>
    </>
  );
}

export default App;
