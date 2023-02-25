import "./App.css";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer1 from "./PortfolioContainer/Footer/Footer1";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <Resume />
      <ContactMe />
      <Footer1 />
    </div>
  );
}

export default App;
