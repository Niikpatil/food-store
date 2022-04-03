import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
