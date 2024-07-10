// import { Carousel, IconButton } from "@material-tailwind/react";

// export function ShowCase() {
//   return (
//     <div>
//       <Carousel autoplay autoplayDelay={1000} loop>
//         <div>
//           <img className="w-full" src="../../../doctor.webp" alt="" />
//         </div>
//         <div>
//           <img className="w-full" src="../../../doctor.webp" alt="" />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function ShowCase() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
        <h1>dfghjk</h1>
      {/* <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  );
};
