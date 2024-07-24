// import { Carousel } from "antd";

import { Carousel } from "@material-tailwind/react";
import Slider from "react-slick";

export default function Angels() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[80px]">
        <h5 className="text-gray-500 text-[20px] font-semibold">Angels</h5>
        <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[40%] text-center">
          Our Doctors
        </h2>
        <div className="flex gap-[10px]">
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
        </div>
        <div className="flex gap-[20px] justify-center items-center flex-wrap lg:flex-nowrap">
          <img src="../../../doctor4.png" alt="" />
          <img src="../../../doctor4.png" alt="" />
          <img src="../../../doctor4.png" alt="" />
          <img src="../../../doctor4.png" alt="" />
          <img src="../../../doctor4.png" alt="" />
        </div>
      </div>
    </div>
  );
}
