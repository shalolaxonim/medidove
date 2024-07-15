import Link from "antd/es/typography/Link";

import React, { useState } from "react";
import { Carousel, Radio, Select, Space } from "antd";
import ButtonGreen from "../buttonGreen";

export default function Pricing() {
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[50px]">
        <div className="flex items-center justify-between flex-col md:flex-row gap-[50px] lg:gap-[420px]">
          <div className="flex flex-col gap-[30px]">
            <h5 className="text-gray-500 text-[20px] font-semibold">
              Our Plans
            </h5>
            <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px]">
              Pricing & Plans
            </h2>
            <div className="flex gap-[10px]">
              <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
              <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
              <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
            </div>
          </div>
          <div className="flex flex-wrap gap-[10px] self-center">
            <button className="bg-[#E12454] rounded-[40px] text-white py-[20px] px-[50px]">
              Monthly
            </button>
            <button className="text-[#223645] rounded-[40px] bg-white py-[20px] px-[50px] border-[2px] border-gray-400">
              Monthly
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-[20px]">
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-start text-start w-[350px]">
            <img src="../../../comment.png" alt="" />
            <h4 className="text-blue-950 text-[40px] font-bold">
              Professional
            </h4>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </p>
            <ButtonGreen btnText={"PRICE:$425.00"} />
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-start text-start w-[350px]">
            <img src="../../../comment.png" alt="" />
            <h4 className="text-blue-950 text-[40px] font-bold">
              Professional
            </h4>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </p>
            <ButtonGreen btnText={"PRICE:$425.00"} />
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-start text-start w-[350px]">
            <img src="../../../comment.png" alt="" />
            <h4 className="text-blue-950 text-[40px] font-bold">
              Professional
            </h4>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo.
            </p>
            <ButtonGreen btnText={"PRICE:$425.00"} />
          </div>
        </div>
      </div>
    </div>
  );
}
