import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* Sidebar always visible */}
      <Sidebar />
      <ScrollToTop />
       <Toaster position="top-center" />
      {/* Routes to switch page content */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
         
      </Routes>
      <Footer />
    </>
  );
}

export default App;
