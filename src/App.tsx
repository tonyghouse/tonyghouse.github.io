import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
     <ThemeContextDefaultProvider>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects />
        <Contributions />
        {/* <Contact/> */}
        <Footer/>
      </ThemeContextDefaultProvider>
     
    </>
  )
}

export default App
