import { useRef } from "react";
import About from "./libs/components/About";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";

function App() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <WelcomeScreen scrollToSection={scrollToSection} />
      <About
        about={sectionRefs.about}
        testimonials={sectionRefs.testimonials}
        contact={sectionRefs.contact}
      />
    </>
  );
}

export default App;
// const scrollToAbout = () => {
//   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
// };

// const scrollToTestimonials = () => {
//   TestimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
// };
// const scrollToContact = () => {
//   contactRef.current?.scrollIntoView({ behavior: "smooth" });
// };
