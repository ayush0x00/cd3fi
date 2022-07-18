import React from "react";
import investorImg from "../static/images/investorImg.png";

const InvestorColumn = () => {
  return (
    <section className="nfbscolumn">
      <div className="container">
        <div className="textWithImg">
          <div
            className="investorImg hideMobile "
            data-aos="fade-up"
            data-aos-duration=""
          >
            <figure>
              <img src={investorImg} alt="" />
            </figure>
          </div>
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              <span>Sponsor</span>-backed so you can <span>relax.</span>{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={investorImg} alt="" />
            </figure>
            <p>
              {" "}
              Sponsors not only guarantee your payout, but earn significant
              income as well. Discover the benefits of sponsorship and sponsor
              the next NFB collection.{" "}
            </p>{" "}
            <a target="_blank" href="https://bit.ly/3Lho5Nx">
              VIEW BENEFITS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorColumn;
