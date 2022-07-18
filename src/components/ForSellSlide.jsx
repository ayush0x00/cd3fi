import React from "react";
import LightCert from "../static/images/NFB Certificate (3).png";
import DarkCert from "../static/images/Cartificate-Dark.png";

const ForSellSlide = () => {
  const handleClick1 = () => {};
  const handleClick2 = () => {};
  return (
    <section className="forSellSlide">
      <div className="container">
        <div className="feeHeading">
          <h4> FOR SALE</h4>
        </div>
        <div className="sellSlide owl-carousel">
          <div className="slideContant">
            <figure>
              {" "}
              <img
                className="main_img"
                onClick={handleClick1} //"guru('grur_',1)"
                id="grur_1"
                src={LightCert}
                alt=""
              />{" "}
            </figure>
            <div className="bond">
              <h4>$2345.66</h4> <strong>Bond #122</strong>
            </div>
            <p>12:31 PM GMT, 5.26.22</p>
          </div>
          <div className="slideContant">
            <figure>
              {" "}
              <img
                className="main_img"
                onClick={handleClick2} //"guru('grur_',2)"
                id="grur_2"
                src={DarkCert}
                alt=""
              />{" "}
            </figure>
            <div className="bond">
              <h4>$2345.66</h4> <strong>Bond #123</strong>
            </div>
            <p>12:31 PM GMT, 5.26.22</p>
          </div>
          <div className="slideContant">
            <figure>
              {" "}
              <img
                className="main_img"
                onClick={handleClick1} //"guru('grur_',1)"
                id="grur_1"
                src={LightCert}
                alt=""
              />{" "}
            </figure>
            <div className="bond">
              <h4>$2345.66</h4> <strong>Bond #124</strong>
            </div>
            <p>12:31 PM GMT, 5.26.22</p>
          </div>
          <div className="slideContant">
            <figure>
              {" "}
              <img
                className="main_img"
                onClick={handleClick2} //"guru('grur_',2)"
                id="grur_2"
                src={DarkCert}
                alt=""
              />{" "}
            </figure>
            <div className="bond">
              <h4>$2345.66</h4> <strong>Bond #123</strong>
            </div>
            <p>12:31 PM GMT, 5.26.22</p>
          </div>
        </div>
        <div className="seeMore">
          {" "}
          <a href="sale.html">SEE ALL</a>{" "}
        </div>
      </div>
    </section>
  );
};

export default ForSellSlide;
