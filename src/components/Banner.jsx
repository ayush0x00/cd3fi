import React from "react";
import mobBanner from "../static/images/mobBanner.png";
import nfb from "../static/images/nfb.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container flexAlign">
        <div className="col-md-6">
          <div className="bannerText">
            <h1>
              {" "}
              The <span>Future</span> of finance
              <br /> is Non-Fungible.{" "}
            </h1>
            <p>
              The official NFT digital financial product for CD3Fi & CinemaDraft
            </p>{" "}
            <a href="sale.html">GET YOUR NFB</a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="videoCont">
            <figure>
              {" "}
              <img className="hideLg w-[300px]" src={mobBanner} alt="" />{" "}
              <img className="hideXs w-[300px]" src={nfb} alt="" />{" "}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
