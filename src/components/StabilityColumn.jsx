import React from "react";
import txtCol from "../static/images/stabilitycolumnImg.png";

const StabilityColumn = () => {
  return (
    <section className="textCoulmn">
      <div className="container">
        <div className="textWithImg">
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              Everyone loves a <span>sale.</span>{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={txtCol} alt="" />
            </figure>
            <p>
              Enjoy CD3Fi up to 70% off when buying your NFB. Just use CD3D to
              buy CD3Fi for a 70% discount in Year 1, 60% discount Year 2, and a
              forever 50% discount Year 3 and beyond.{" "}
            </p>{" "}
            <a target="_blank" href="https://cd3d.app/trade">
              CLAIM DISCOUNT
            </a>
          </div>
          <div
            className="stabilityImg hideMobile"
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

export default StabilityColumn;
