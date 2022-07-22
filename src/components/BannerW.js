import React from "react";
import { Link } from "react-router-dom";
import nfb from "../static/images/nfb.png";

export default function BannerW() {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="flex flex-col items-start flex-wrap ml-10 mt-10">
        <p className="text-white text-5xl font-semibold">
          The <span className="italic text-cyan-200">Future</span> of finance
        </p>
        <p className="text-white text-5xl font-semibold">is Non-Fungible</p>
        <p className="text-white">
          The official digital financial product for CD3Fi & CinemaDraft
        </p>
        <Link to="/buy">
          <button className="px-10 py-2 rounded-lg hover:bg-cyan-400 bg-cyan-200 text-black font-semibold">
            GET YOUR NFB
          </button>
        </Link>
      </div>
      <div>
        <img src={nfb} />
      </div>
    </div>
  );
}
