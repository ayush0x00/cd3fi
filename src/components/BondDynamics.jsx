import React from "react";

const BondDynamics = () => {
  return (
    <section className="buySection">
      <div className="container">
        <div className="buyBg">
          <div className="feeHeading">
            <h4> Bond Dynamics</h4>
          </div>
          <div className="gridCard">
            <div className="feeCard" data-aos="fade-up" data-aos-duration="">
              <h5>PRIMARY SALE: 100% TO CREATORS</h5>
              <ul>
                <p>Revenue to the minters, Sponsor, and Guarantee Fund. </p>
                <li>
                  <span>50% </span> - <p>to Sponsor</p>
                </li>
                <li>
                  <span>40%</span> - <p>to Guarantee Fund</p>
                </li>
                <li>
                  <span>10% </span> -{" "}
                  <p style={{ marginLeft: "20px" }}> to CinemaDraft</p>
                </li>
              </ul>
            </div>
            <div className="feeCard" data-aos="fade-up" data-aos-duration="">
              <h5>SECONDARY SALES: 100% TO CREATORS</h5>
              <ul>
                <p>A forever fee for trading NFBs on the secondary market.</p>
                <li>
                  <span>8%</span> - <p>to Sponsor </p>
                </li>
                <li>
                  <span>6%</span> - <p>to Guarantee Fund</p>
                </li>
                <li>
                  <span>1% </span> -{" "}
                  <p style={{ marginLeft: "20px" }}>to CinemaDraft</p>
                </li>
              </ul>
            </div>
            <div className="feeCard" data-aos="fade-up" data-aos-duration="">
              <h5>NFB SUPPLY COLLECTION #1: 500</h5>
              <ul>
                <p>
                  Priced on a bonded curve scale. Each NFB costs a little more
                  than the previous one. Brought to you by CinemaDraft, LLC.
                </p>
                <li>
                  <span>450</span> - <p>available for sale</p>
                </li>
                <li>
                  <span>50 &nbsp;&nbsp;</span> - <p>to sponsor; 5-year lock</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="viewMore">
            {" "}
            <a target="_blank" href=" https://bit.ly/38oKZVP ">
              More Details
            </a>{" "}
            <a className="somDe" target="_blank" href="https://bit.ly/3GtJ1jq">
              Some Details
            </a>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BondDynamics;
