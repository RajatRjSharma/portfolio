import "./App.css";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
