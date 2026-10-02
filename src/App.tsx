
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoDetails from "./pages/PhotoDetails";
import About from "./pages/About";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
