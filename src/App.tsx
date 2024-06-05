// import Navbar from "./libs/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import About from "./libs/components/About";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <AppRoutes />
      <About />
    </Router>
  );
}

export default App;
