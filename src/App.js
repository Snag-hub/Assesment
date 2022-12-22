import "./App.css";
import About from "./components/Sections/About";
import Section from "./components/Sections/Section";
import HeroSec from "./components/bannerSection/HeroSec";
import Footer from "./components/Sections/Footer";


function App() {
  return (
    <>
        <HeroSec />
        <About />
        <Section />
        <Footer />
    </>
  );
}

export default App;
