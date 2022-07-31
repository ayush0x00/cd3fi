import React from "react";
import de1 from "../static/images/de1.png";
import de2 from "../static/images/de2.png";
import de3 from "../static/images/de3.png";
import de4 from "../static/images/de4.png";
import de5 from "../static/images/de5.png";
import de6 from "../static/images/de6.png";
import de7 from "../static/images/de7.png";
import de8 from "../static/images/de8.png";

const EarnCash = () => {
  const handleClick = () => {};
  return (
    <section className="earnCash">
      <div className="container">
        <div className="earnHeading text-center">
          <h1>
            <span>De-risk</span> yourself.<span> Stability</span> is underrated.
          </h1>
          <p>
            Set it and forget it. Enjoy the profitability of patience. Invest
            like the best.
          </p>
        </div>
        <div className="rewardCard">
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de1} alt="" />
            </figure>
            <h4>
              Minimum 5-figure+
              <br />
              guaranteed payout{" "}
            </h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de2} alt="" />
            </figure>
            <h4>Full payout amount sponsor-guaranteed</h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de3} alt="" />
            </figure>
            <h4> Only 1000 CD3Fi needed to buy or sell </h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de4} alt="" />
            </figure>
            <h4>Discounted buying w/CD3D </h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de5} alt="" />
            </figure>
            <h4>Payout from Guarantee Fund is paid through % of NFB sales</h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de6} alt="" />
            </figure>
            <h4>Guarantee Fund surplus split among bondholders </h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de7} alt="" />
            </figure>
            <h4>Quarterly BUSD & CD3Fi rewards to holders </h4>
          </div>
          <div className="earnCashCard" data-aos="fade-up" data-aos-duration="">
            <figure>
              <img src={de8} alt="" />
            </figure>
            <h4>Maximum 5 bonds per address</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnCash;
