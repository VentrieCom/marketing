import Navbar from "./libs/components/Navbar";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";
import About from "./libs/components/About";
import { Box } from "@chakra-ui/react";
import WelcomeBG from "../src/assets/Images/WelcomeBG.png";

function App() {
  return (
    <>
      {/* <Box
        bgImage={`url(${WelcomeBG})`}
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize="contain"
        bgColor={"secondary.900"}
      > */}
        {/* <Navbar /> */}
        <WelcomeScreen />

      <About />
    // </>
  );
}

export default App;
