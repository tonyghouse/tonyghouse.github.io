import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";

function App() {

  return (
    <>
     <ThemeContextDefaultProvider>
     <Navbar />
        
        <Routes>
          <Route path="/" element={<MasterLayout />} />
          <Route path="/contributions" element={<Contributions />} />
        </Routes>
      </ThemeContextDefaultProvider>
     
    </>
  )
}

export default App
