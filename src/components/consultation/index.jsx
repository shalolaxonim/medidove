import { Input, Select } from "antd";
import ButtonGreen from "../buttonGreen";
import ButtonPink from "../buttonPink";

export default function Consultation() {
  return (
    <div className="relative bg-[#223645] h-[650px]]">
      <div className="bg-[#223645] md:px-[200px] py-[80px]">
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-[20px] items-center text-center w-[300px]">
            <i class="fa-solid fa-heart-pulse text-[#E12454] text-[100px]"></i>
            <div>
              <h4 className="text-white font-bold text-[55px]">540+</h4>
              <h5 className="text-[#8FB569] font-semibold">Expert Doctors</h5>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center text-center w-[300px]">
            <i class="fa-solid fa-heart-pulse text-[#E12454] text-[100px]"></i>
            <div>
              <h4 className="text-white font-bold text-[55px]">540+</h4>
              <h5 className="text-[#8FB569] font-semibold">Expert Doctors</h5>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] items-center text-center w-[300px]">
            <i class="fa-solid fa-heart-pulse text-[#E12454] text-[100px]"></i>
            <div>
              <h4 className="text-white font-bold text-[55px]">540+</h4>
              <h5 className="text-[#8FB569] font-semibold">Expert Doctors</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center relative -bottom-[50px] lg:left-[00px]">
        <div className="bg-white md:shadow-xl md:self-center items-start md:shadow-white p-[50px] w-[300px] md:w-[900px] flex flex-col flex-wrap gap-[20px]">
          <div className="flex gap-[30px]">
            <div>
              <h6 className="text-[#E12454] text-[15px] font-bold">
                Free Consultation
              </h6>
              <h2 className="mg:text-[60px] w-[90%] text-blue-950 font-bold">
                Get An Appointment For Get Release.
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-[20px]">
            <div className="flex gap-[30px]">
              <i class="fa-regular fa-user text-[#E12454] text-[30px]"></i>
              <div>
                <h6 className="text-gray-500 font-semibold text-[12px]">
                  YOUR NAME
                </h6>
                <Input
                  placeholder="Enter Your Name"
                  variant="borderless"
                  className="text-[25px] font-semibold text-blue-950"
                />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <i class="fa-regular fa-user text-[#E12454] text-[30px]"></i>
              <div>
                <h6 className="text-gray-500 font-semibold text-[12px]">
                  YOUR NAME
                </h6>
                <Input
                  placeholder="Enter Your Name"
                  variant="borderless"
                  className="text-[25px] font-semibold text-blue-950"
                />
              </div>
            </div>
            <div className="flex gap-[30px]">
              <i class="fa-solid fa-people-group text-[#E12454] text-[30px]"></i>
              <div>
                <h6 className="text-gray-500 text-[10px] font-semibold">
                  SELECT YOUR SERVICES
                </h6>
                <Select
                  className="text-blue-700 text-[30px]"
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
            <div className="flex gap-[30px]">
              <i class="fa-regular fa-user text-[#E12454] text-[30px]"></i>
              <div>
                <h6 className="text-gray-500 font-semibold text-[12px]">
                  YOUR NAME
                </h6>
                <Input
                  placeholder="Enter Your Name"
                  variant="borderless"
                  className="text-[25px] font-semibold text-blue-950"
                />
              </div>
            </div>
          </div>
          {/* <div className="md:w-[300px] h-[2px] bg-gray-500"></div> */}
          <ButtonPink btnText={"Make Appointment"} />
        </div>
        <div className="hidden bg-[#e13865f0] w-[300px] lg:flex justify-center items-center flex-col">
          <i class="fa-solid fa-staff-snake text-white text-[100px]"></i>
          <h4 className="text-white text-[40px]">MediDove</h4>
        </div>
      </div>
    </div>
  );
}
