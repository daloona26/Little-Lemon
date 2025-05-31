import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Specials from "./components/Specials";
import Testomenials from "./components/Testemenials";
import About from "./components/About";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Specials />
      <Testomenials />
      <About />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
