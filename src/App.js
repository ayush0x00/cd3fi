import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";
import "./static/css/responsive.css";
import React, { useState, useEffect } from "react";
import SalesPage from "./Pages/SalesPage.js";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Navbar from "./components/Sales/Navbar";
import { ethers } from "ethers";
import abi from "./abi.json";

//cd3fi token: 0x74A95863e981A6dbf6e7f8bb263F3F6952c905D3
//pancake factory: 0xb7926c0430afb07aa7defde6da862ae0bde767bc

function App() {
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const address = "0xCA9e94563432100f8644225D66440c67030E2499";
  const bscProvider = "http://localhost:7545"; //"https://data-seed-prebsc-1-s1.binance.org:8545/";

  const connectMetamask = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const acc = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const nfbContract = new ethers.Contract(address, abi, signer);
      setContract(nfbContract);
      setSigner(signer);
      setAccount(
        `${acc[0].substring(0, 3)}..${acc[0].substring(acc[0].length - 3)}`
      );
      const sym = await contract.symbol();
      console.log(sym);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Navbar connectMetamask={connectMetamask} account={account} />
      <Routes>
        <Route path="/buy" element={<SalesPage contract={contract} />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
