import React from "react";
import txtCol from "../static/images/textColumnImg2.png";

const NFBColumn = () => {
  return (
    <section className="nfbscolumn">
      <div className="container">
        <div className="textWithImg" data-aos="fade-up" data-aos-duration="">
          <div className="nfbsImg hideMobile">
            <figure>
              <img src={txtCol} alt="" />
            </figure>
          </div>
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              {" "}
              <span>Sell&nbsp;</span> or <span> hold</span> - the choice is
              <span> yours.</span>{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={txtCol} alt="" />
            </figure>
            <p>
              Whether you hold it to maturity in five years or resell it to lock
              in early profit, take control of your long-term financial product.
            </p>{" "}
            <a className="button" target="_blank" href="https://bit.ly/3wfwnRN">
              TAKE CONTROL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFBColumn;
