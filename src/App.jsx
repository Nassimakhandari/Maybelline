
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import "./index.css";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


      <Footer/>
    </>
  );
}

export default App;

