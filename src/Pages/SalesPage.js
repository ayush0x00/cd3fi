import { propNames } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import AvailableNFBS from "./AvailableNFBS";
import SoldNFBs from "./SoldNFBS";

export default function SalesPage(props) {
  const [show, setshow] = useState(1);
  const activeClass = "text-black bg-cyan-200 ";
  const inActiveClass = "text-white bg-[#0a031a]";

  return (
    <div className="min-h-[100vh] flex flex-col">
      <div className="bg-[#231938] flex justify-center flex-col">
        <div className=" mx-20 mt-5">
          <div className="flex justify-between lg:flex-col ">
            <div className="bg-violet-900 rounded-xl mb-6 w-[380px] sm:w-[260px]">
              <button
                className={`${
                  show === 1 ? activeClass : inActiveClass
                } rounded-l-xl py-3 w-[190px] font-semibold sm:w-[130px] `}
                onClick={() => {
                  setshow(1);
                }}
              >
                Available NFBS
              </button>
              <button
                className={`${
                  show === 2 ? activeClass : inActiveClass
                } rounded-r-xl py-3 w-[190px] font-semibold sm:w-[130px]`}
                onClick={() => {
                  setshow(2);
                }}
              >
                Sold NFBs
              </button>
            </div>
          </div>
          <div className="mt-10 ">
            {show == 1 ? (
              <AvailableNFBS contract={props.contract} />
            ) : (
              <SoldNFBs contract={props.contract} />
            )}
          </div>
        </div>
      </div>
      <footer className="mt-auto">
        <p className="py-2 text-center bg-cyan-200 font-semibold text-blue-900">
          © CinemaDraft, LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
