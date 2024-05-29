import Navbar from "./libs/components/Navbar";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";
import About from "./libs/components/About";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeScreen />
      <About />
    </>
  );
}

export default App;
