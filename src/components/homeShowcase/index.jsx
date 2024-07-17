import { Link } from "react-router-dom";
import ButtonGreen from "../buttonGreen";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

export default function HomeShowcase() {
  return (
    <div className="bg-red-300">
      <div className="flex flex-col lg:flex-row items-center bg-red-300 bg-[url('../../../family.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-[20px] p-[20px] lg:p-[200px] lg:w-[65%] items-center text-center md:text-start md:items-start py-[80px]">
          <h2 className="text-white text-[20px] font-semibold">
            We are here for your care.
          </h2>
          <h1 className="text-white text-[40px] md:text-[90px] font-bold md:leading-[100px]">
            Best Care & Best Doctor.
          </h1>
          <div className="flex gap-[30px] items-center flex-col md:flex-row">
            <ButtonGreen btnText={"MAKE APPOINTMENT"} />
            <div className="bg-[#8FB569] w-[60px] h-[60px] rounded-full p-[10px] flex justify-center items-center">
              <i class="fa-solid fa-play text-white"></i>
            </div>
          </div>
        </div>
        <div className="bg-white md:shadow-md md:self-center md:shadow-white p-[50px] w-[300px] md:w-[400px] rounded-2xl flex flex-col gap-[20px]">
          <div className="flex gap-[30px]">
            <div>
              <h6 className="text-gray-500 text-[15px] font-bold">
                WE ARE HERE FOR YOU
              </h6>
              <h2 className="text-[35px] text-blue-950 font-bold">
                Find A Care Giver
              </h2>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <i class="fa-solid fa-people-group text-[#E12454] text-[30px]"></i>
            <div>
              <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
              <Select
                className="text-red-700 text-[30px]"
                placeholder="Choose a Service"
                variant="borderless"
                style={{
                  flex: 1,
                  width: "100%",
                  fontSize: "100px",
                  color: "red",
                }}
                options={[
                  {
                    value: "Choose a Service",
                    label: "Choose a Service",
                  },
                  {
                    value: "Chicago, United States",
                    label: "Chicago, United States",
                  },
                  {
                    value: "California, United States",
                    label: "California, United States",
                  },
                ]}
              />
            </div>
          </div>
          <div className="md:w-[300px] h-[2px] bg-gray-500"></div>
          <div className="flex gap-[30px]">
            <i class="fa-solid fa-people-group text-[#E12454] text-[30px]"></i>
            <div>
              <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
              <Select
                className="text-red-700 text-[30px]"
                placeholder="Choose a Service"
                variant="borderless"
                style={{
                  flex: 1,
                  width: "100%",
                  fontSize: "100px",
                  color: "red",
                }}
                options={[
                  {
                    value: "Choose a Service",
                    label: "Choose a Service",
                  },
                  {
                    value: "Chicago, United States",
                    label: "Chicago, United States",
                  },
                  {
                    value: "California, United States",
                    label: "California, United States",
                  },
                ]}
              />
            </div>
          </div>
          <div className="md:w-[300px] h-[2px] bg-gray-500"></div>
          <ButtonGreen btnText={"Make Appointment"} />
        </div>
      </div>
    </div>
  );
}
