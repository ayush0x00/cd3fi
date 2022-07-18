import React from "react";
import LightCert from "../static/images/NFB Certificate (3).png";
import DarkCert from "../static/images/Cartificate-Dark.png";

const SampleSlide = () => {
  const handleClick = () => {};
  return (
    <section className="forSellSlide">
      <div className="container">
        <div className="feeHeading">
          <h4> FOR SALE</h4>
        </div>
        <div className="sellSlide owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-1083px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "2888px",
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              <div
                className="owl-item"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              </div>
              <div
                className="owl-item active"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              <div
                className="owl-item active"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              </div>
              <div
                className="owl-item"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              <div
                className="owl-item cloned"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "346px", marginRight: "15px" }}
              >
                <div className="slideContant">
                  <figure>
                    {" "}
                    <img
                      className="main_img"
                      onClick={handleClick}
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
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">
              {" "}
              <div className="nav-btn prev-slide">
                <img src="assets/images/icons/arrowSlide.svg" />
              </div>
            </div>
            <div className="owl-next">
              <div className="nav-btn next-slide">
                <img src="assets/images/icons/arrowSlide.svg" />
              </div>
            </div>
          </div>
          <div className="owl-dots">
            <div className="owl-dot active">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
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

export default SampleSlide;
