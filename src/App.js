import logo from "./logo.svg";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import Projects from "./components/pages/Projects.js";
import FEM from "./components/pages/FEM";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/FEM" element={<FEM />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
