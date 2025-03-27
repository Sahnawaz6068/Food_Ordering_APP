import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Headers from "./components/Headers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
      </BrowserRouter>
    </>
  );
}
export default App;
