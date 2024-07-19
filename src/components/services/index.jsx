import Link from "antd/es/typography/Link";

export default function Services() {
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[80px]">
        <h5 className="text-gray-500 text-[20px] font-semibold">Services</h5>
        <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[40%] text-center">
          What We Do For You?
        </h2>
        <div className="flex gap-[10px]">
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
        </div>
        <div className="flex flex-wrap gap-[20px] justify-center lg:w-[80%]">
          <div className="bg-white p-[50px] flex flex-col gap-[30px] w-[300px] lg:w-[500px] hover:shadow-xl">
            <i class="fa-solid fa-hand-holding-medical text-[#E12454] text-[50px]"></i>
            <h4 className="text-[#8FB569]">OLDER & CHILDREN</h4>
            <Link className="cursor-pointer">
              <b className="hover:text-[#E12454] text-blue-900 text-[25px] lg:text-[40px]">
                Medical Home Care
              </b>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <b className="hover:text-[#E12454] text-gray-500">
              <i class="fa-solid fa-arrow-right"></i> Read More
            </b>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] w-[300px] lg:w-[500px] hover:shadow-xl">
            <i class="fa-solid fa-hand-holding-medical text-[#E12454] text-[50px]"></i>
            <h4 className="text-[#8FB569]">OLDER & CHILDREN</h4>
            <Link className="cursor-pointer">
              <b className="hover:text-[#E12454] text-blue-900 text-[25px] lg:text-[40px]">
                Medical Home Care
              </b>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <b className="hover:text-[#E12454] text-gray-500">
              <i class="fa-solid fa-arrow-right"></i> Read More
            </b>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] w-[300px] lg:w-[500px] hover:shadow-xl">
            <i class="fa-solid fa-hand-holding-medical text-[#E12454] text-[50px]"></i>
            <h4 className="text-[#8FB569]">OLDER & CHILDREN</h4>
            <Link className="cursor-pointer">
              <b className="hover:text-[#E12454] text-blue-900 text-[25px] lg:text-[40px]">
                Medical Home Care
              </b>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <b className="hover:text-[#E12454] text-gray-500">
              <i class="fa-solid fa-arrow-right"></i> Read More
            </b>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[30px] w-[300px] lg:w-[500px] hover:shadow-xl">
            <i class="fa-solid fa-hand-holding-medical text-[#E12454] text-[50px]"></i>
            <h4 className="text-[#8FB569]">OLDER & CHILDREN</h4>
            <Link className="cursor-pointer">
              <b className="hover:text-[#E12454] text-blue-900 text-[25px] lg:text-[40px]">
                Medical Home Care
              </b>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <b className="hover:text-[#E12454] text-gray-500">
              <i class="fa-solid fa-arrow-right"></i> Read More
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
