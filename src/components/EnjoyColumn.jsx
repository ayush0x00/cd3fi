import React from "react";
import enjoyImg from "../static/images/enjoyImg.png";

const EnjoyColumn = () => {
  return (
    <section className="textCoulmn">
      <div className="container">
        <div className="textWithImg">
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              It <span>pays</span> to be <span>patient.</span>{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={enjoyImg} alt="" />
            </figure>
            <p>
              Ten percent of quarterly revenue to the Guarantee Fund is
              distributed equally to all NFB owners every 90 days. All you have
              to do is own one.
            </p>{" "}
            <a target="_blank" href="https://bit.ly/3wfwnRN">
              PROJECTED EARNINGS
            </a>
          </div>
          <div
            className="enjoyImg hideMobile"
            data-aos="fade-up"
            data-aos-duration=""
          >
            <figure>
              <img src={enjoyImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyColumn;
