import Footer from "../components/Footer";
import CounterArea from "../components/CounterArea";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import "../static/css/responsive.css";
import ForSellSlide from "../components/ForSellSlide";
import EarnCash from "../components/EarnCash";
import TextColumn from "../components/TextColumn";
import NFBColumn from "../components/NFBColumn";
import StabilityColumn from "../components/StabilityColumn";
import ConnectSection from "../components/ConnectSection";
import RichColumn from "../components/RichColumn";
import EnjoyColumn from "../components/EnjoyColumn";
import InvestorColumn from "../components/InvestorColumn";
import BondDynamics from "../components/BondDynamics";
import BannerW from "../components/BannerW";

import React from "react";
import SplideCrousel from "../components/SplideCrousel";

export default function MainPage() {
  return (
    <div>
      <BannerW />

      <CounterArea />
      <SplideCrousel />
      <ForSellSlide />
      <EarnCash />
      <TextColumn />

      <NFBColumn />
      <StabilityColumn />
      <ConnectSection />
      <RichColumn />
      <EnjoyColumn />
      <InvestorColumn />
      <BondDynamics />
      <Footer />
    </div>
  );
}
