import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footers from "./components/Footers";
import Experties from "./components/Experties";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experties />
      <Work />
      <Contact />
      <Footers />
    </div>
  );
};

export default App;
