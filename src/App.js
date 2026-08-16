import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./PortfolioContainer/Home/Home";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Home />
      </div>
    </ErrorBoundary>
  );
}

export default App;
