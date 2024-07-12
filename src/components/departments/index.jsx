import Link from "antd/es/typography/Link";

export default function Departments() {
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[80px]">
        <h5 className="text-gray-500 text-[20px] font-semibold">Departments</h5>
        <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[40%] text-center">
          Managed Your Heathcare Services
        </h2>
        <div className="flex gap-[10px]">
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center lg:w-[80%]">
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] items-center text-center w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-person-chalkboard text-[#E12454] text-[50px]"></i>
            <Link className="cursor-pointer">
              <h4 className="hover:text-[#8FB569]">Body Surgery</h4>
            </Link>
            <p className="text-gray-500">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link className="cursor-pointer">
              <b className="hover:text-[#8FB569] text-gray-500">Read More</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
