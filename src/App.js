import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  document.title = "Ziya Karagoz";
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
