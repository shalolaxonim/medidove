import { Link } from "react-router-dom";
import ButtonGreen from "../buttonGreen";
import { Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
const { Search } = Input;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

export default function Subscribe() {
  return (
    <div>
      <div className="flex justify-center lg:justify-end bg-[url('../../../doctor.webp')] bg-no-repeat bg-cover bg-center py-[80px] p-[10px] md:p-[80px]">
        <div className="bg-white md:shadow-md md:self-center md:shadow-white p-[50px] w-[300px] md:w-[550px] flex flex-col self-end gap-[20px]">
          <div className="flex gap-[30px]">
            <div>
              <h6 className="text-[#E12454] text-[15px] font-bold">
                Subscribe For Get Update
              </h6>
              <h2 className="text-[30px] lg:text-[45px] text-blue-950 font-bold">
                Let’s Find An Office Near You.
              </h2>
            </div>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Space.Compact
            style={{
              width: "100%",
            }}
          >
            <Input
              defaultValue="Enter your email address"
              className="rounded-3xl h-[50px] bg-gray-100 px-[30px]"
            />
            <Button
              type="primary"
              className="rounded-3xl h-[50px] bg-[#E12454]"
            >
              Subscribe
            </Button>
          </Space.Compact>
        </div>
      </div>
    </div>
  );
}
