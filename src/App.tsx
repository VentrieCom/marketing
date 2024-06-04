import Navbar from "./libs/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
