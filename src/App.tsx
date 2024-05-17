import { VStack } from "@chakra-ui/react";
import Navbar from "./libs/components/Navbar";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";

function App() {
  return (
    <>
      <VStack w={"full"}>
        <Navbar />
        <WelcomeScreen />
      </VStack>
    </>
  );
}

export default App;
