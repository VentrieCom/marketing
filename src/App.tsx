import { useRef } from "react";
import About from "./libs/components/About";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";

function App() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <WelcomeScreen scrollToSection={scrollToSection} />
      <About
        about={sectionRefs.about}
        features={sectionRefs.features}
        contact={sectionRefs.contact}
      />
    </>
  );
}

export default App;
