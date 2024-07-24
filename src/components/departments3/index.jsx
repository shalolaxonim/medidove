import Link from "antd/es/typography/Link";
import ButtonGreen from "../buttonGreen";

export default function Departments3() {
  return (
    <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] lg:gap-[60px] px-[30px] py-[50px] lg:p-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[30px]">
          <h5 className="text-gray-500 text-[20px] font-semibold">
            Departments
          </h5>
          <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[60%]">
            Managed Your Heathcare Services
          </h2>
          <div className="flex gap-[10px]">
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          </div>
        </div>
        <div className="hidden lg:block">
          <ButtonGreen btnText={"MORE SERVICES"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        <div className="flex flex-col gap-[10px] w-[400px] relative">
          <img
            src="../../../../doctor2.png"
            className="h-[300px] object-cover"
            alt=""
          />
          <div className="relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
            <div className="flex flex-col self-center items-center text-center p-[40px]">
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#8FB569]">
                  Body Surgery
                </h4>
              </Link>
              <p className="text-gray-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <button className="hover:bg-[#E12454] hover:text-white py-[10px] px-[40px] bg-blue-100 font-bold text-blue-900">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-[400px] relative">
          <img
            src="../../../../doctor2.png"
            className="h-[300px] object-cover"
            alt=""
          />
          <div className="relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
            <div className="flex flex-col self-center items-center text-center p-[40px]">
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#8FB569]">
                  Body Surgery
                </h4>
              </Link>
              <p className="text-gray-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <button className="hover:bg-[#E12454] hover:text-white py-[10px] px-[40px] bg-blue-100 font-bold text-blue-900">
              Read More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-[400px] relative">
          <img
            src="../../../../doctor2.png"
            className="h-[300px] object-cover"
            alt=""
          />
          <div className="relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
            <div className="flex flex-col self-center items-center text-center p-[40px]">
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#8FB569]">
                  Body Surgery
                </h4>
              </Link>
              <p className="text-gray-500">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <button className="hover:bg-[#E12454] hover:text-white py-[10px] px-[40px] bg-blue-100 font-bold text-blue-900">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
