import Footer from "./components/Footer";
import CounterArea from "./components/CounterArea";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";
import "./static/css/responsive.css";
import SalesPage from "./Pages/SalesPage.js";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/buy" element={<SalesPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
