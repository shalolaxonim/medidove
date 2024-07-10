import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "10vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const flex = {
  display: "flex",
  gap: "10px",
  padding: "20px",
};
const Show = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} draggable waitForAnimate>
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-[20px] w-[30%] bg-red-500 absolute top-[220px]">
          <h2>We are here for your care.</h2>
          <h1>Best Care & Best Doctor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores voluptas pariatur dicta vitae laborum omnis, rem provident
            labore.
          </p>
        </div>
        <img
          className="h-[90vh] object-contain ml-[450px] w-[1000%] bg-red-400 p-[20px]"
          src="../../../doctor.webp"
          alt=""
        />
      </div>
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-[20px] w-[30%] bg-red-500 absolute top-[220px]">
          <h2>We are here for your care.</h2>
          <h1>Best Care & Best Doctor.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores voluptas pariatur dicta vitae laborum omnis, rem provident
            labore.
          </p>
        </div>
        <img
          className="h-[90vh] object-contain ml-[450px] w-[1000%] bg-red-400 p-[20px]"
          src="../../../doctor.webp"
          alt=""
        />
      </div>
    </Carousel>
  );
};
export default Show;
