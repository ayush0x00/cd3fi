import Footer from "./components/Footer";
import CounterArea from "./components/CounterArea";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";
import "./static/css/responsive.css";
import Banner from "./components/Banner";
import ForSellSlide from "./components/ForSellSlide";
import EarnCash from "./components/EarnCash";
import TextColumn from "./components/TextColumn";
import NFBColumn from "./components/NFBColumn";
import StabilityColumn from "./components/StabilityColumn";
import ConnectSection from "./components/ConnectSection";
import RichColumn from "./components/RichColumn";
import EnjoyColumn from "./components/EnjoyColumn";
import InvestorColumn from "./components/InvestorColumn";
import BondDynamics from "./components/BondDynamics";
import Example from "./components/Example";
import SampleSlide from "./components/SampleSlide";
import { Routes,Route } from 'react-router-dom';
import SalesPage from  './Pages/SalesPage.js'
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/buy' element={<SalesPage />} />
        <Route path = '/' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
