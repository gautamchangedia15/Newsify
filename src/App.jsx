import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
