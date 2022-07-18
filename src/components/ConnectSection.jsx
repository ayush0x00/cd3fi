import React from "react";
import cd3d from "../static/images/cd3d.png";
import connect1 from "../static/images/connect1.png";
import connect3 from "../static/images/connect3.png";
import connect4 from "../static/images/connect4.png";

const ConnectSection = () => {
  return (
    <section className="connectSection">
      <div className="container">
        <div className="connectBg">
          <div className="gridCard">
            <div className="myCard" data-aos="fade-up" data-aos-duration="">
              <figure>
                <img src={connect1} alt="" />
              </figure>
              <h4>Connect wallet</h4>
              <p>Use Metamask or your favorite web3 wallet.</p>
            </div>
            <div className="myCard" data-aos="fade-up" data-aos-duration="">
              <figure>
                <img src={cd3d} />
              </figure>
              <h4>Go to CD3D DEX</h4>
              <p>Buy CD3D to enjoy up to 70% discounts in BUSD on CD3Fi.</p>
            </div>
            <div className="myCard" data-aos="fade-up" data-aos-duration="">
              <figure>
                <img src={connect3} alt="" />
              </figure>
              <h4>Swap for CD3Fi</h4>
              <p>
                Using CD3D is the cheapest way to acquire CD3Fi. Need minimum
                1000 CD3Fi to buy/sell a NFB.
              </p>
            </div>
            <div className="myCard" data-aos="fade-up" data-aos-duration="">
              <figure>
                <img src={connect4} alt="" />
              </figure>
              <h4>Buy a NFB</h4>
              <p>
                Click NFB to go to our NFB marketplace and buy one with CD3Fi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
