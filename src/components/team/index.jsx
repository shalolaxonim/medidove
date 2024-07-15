import Link from "antd/es/typography/Link";
import ButtonGreen from "../buttonGreen";

export default function Team() {
  return (
    <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] lg:gap-[60px] px-[30px] py-[50px] lg:p-[80px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[30px]">
          <h5 className="text-gray-500 text-[20px] font-semibold">Our Team</h5>
          <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[60%]">
            A Professional & Care Provider
          </h2>
          <div className="flex gap-[10px]">
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          </div>
        </div>
        <div className="hidden lg:block">
          <ButtonGreen btnText={"MAKE APPOINTMENT"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-[80px] justify-center lg:w-[80%]">
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
        <div className="p-[0px] flex flex-col gap-[20px] items-center text-center w-[300px] relative">
          <img
            src="../../../../avatar1.png"
            className="bg-blue-300 rounded-full"
            alt=""
          />
          <Link className="bg-[#8FB569] w-[50px] h-[50px] rounded-full flex justify-center items-center text-[30px] font-bold absolute right-[5px] top-[200px]">
            <span className="text-white">+</span>
          </Link>
          <div>
            <h4 className="text-[#223645] font-bold">Rosalina D. Williamson</h4>
            <h5 className="text-red-600 font-semibold">FOUNDER</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
