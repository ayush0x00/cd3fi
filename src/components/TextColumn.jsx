import React from "react";
import txtCol from "../static/images/textColumnImg1.png";

const TextColumn = () => {
  return (
    <section className="textCoulmn">
      <div className="container">
        <div className=" textWithImg">
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              {" "}
              <span>Stability&nbsp;</span> in an unstable world.{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={txtCol} alt="" />
            </figure>
            <p>Your future is now. Invest in something you can rely on.</p>{" "}
            <a target="_blank" href=" https://bit.ly/3lfrfqt">
              PRICE LIST
            </a>
          </div>
          <div
            className="textColumnImg hideMobile"
            data-aos="fade-up"
            data-aos-duration=""
          >
            <figure>
              <img src={txtCol} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextColumn;
