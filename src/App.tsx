import { VStack } from "@chakra-ui/react";
import Navbar from "./libs/components/Navbar";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";
import About from "./libs/components/About";

function App() {
  return (
    <>
      <VStack w={"full"}>
        <Navbar />
        <WelcomeScreen />
      </VStack>
      <About />
    </>
  );
}

export default App;
