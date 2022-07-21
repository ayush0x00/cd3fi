import React from "react";
import ModalEl from "./ModalEl";
import ModalElSold from "./ModalElSold";

export default function Card(props) {
  return (
    <div className="w-[350px] 3xl:w-[330px] 2xl:w-[270px] lg:w-[260px] sm:w-[260px] mx-auto">
      <div className="bg-[#1d1236]  px-5 rounded-lg mb-10 ">
        <img src={props.img} className="pt-6 pb-2" />
        <div className="flex justify-between items-center">
          <p className="text-teal-200 text-xl font-bold lg:text-base sm:text-sm">
            {props.price}
          </p>
          <p className="font-bold text-sm lg:text-xs">{`Bond ${props.bond}`}</p>
        </div>
        <div className="flex items-center justify-between py-4 pb-8">
          <p className="text-xs ">{props.time}</p>

          {props.button === "BUY" ? (
            <ModalEl name={props.button} />
          ) : (
            <ModalElSold name={props.button} />
          )}
        </div>
      </div>
    </div>
  );
}
