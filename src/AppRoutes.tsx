import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./libs/components/overrides/WelcomeSceen";
import About from "./libs/components/About";
import Testimonials from "./libs/components/Testimonials";
import Footer from "./libs/components/Footer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<WelcomeScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default AppRoutes;
