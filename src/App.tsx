
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoDetails from "./pages/PhotoDetails";
import Albums from "./pages/Albums";


function App() {
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
