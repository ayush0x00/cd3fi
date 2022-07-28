import React from "react";
import richImg from "../static/images/richImg.png";
import ModalImage from "./modalCash";

const RichColumn = () => {
  const handleClick = () => {};
  return (
    <section className="nfbscolumn">
      <div className="container">
        <div className="textWithImg">
          <div
            className="richImg hideMobile"
            data-aos="fade-up"
            data-aos-duration=""
          >
            <figure>
              <img src={richImg} alt="" />
            </figure>
          </div>
          <div className="bannerText" data-aos="fade-up" data-aos-duration="">
            <h1>
              Nothing in life is <span>guaranteed</span> - except your{" "}
              <span>NFB.</span>{" "}
            </h1>
            <figure className="hideDesktop">
              <img src={richImg} alt="" />
            </figure>
            <p>
              {" "}
              A percentage of every NFB sale - and resale - goes to the
              Guarantee Fund. Any deficit of the guaranteed amount will be
              covered by the collection Sponsor; any surplus is distributed to
              NFB owners.{" "}
            </p>{" "}
            {/*<a
              target="_blank"
              className="main_img"
              onClick={handleClick} //"guru1('grur_',1  )"
              id="grur_1"
            >
              GUARANTEED.
            </a>*/}
            <ModalImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichColumn;
