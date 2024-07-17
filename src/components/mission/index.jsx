import ButtonGreen from "../buttonGreen";

export default function Mission() {
  return (
    <div>
      <div className="flex flex-col items-center lg:flex-row md:py-[80px] lg:p-[100px]">
        <div className="flex flex-col gap-[20px] p-[20px] lg:p-[100px] lg:w-[50%] lg:text-start lg:items-start py-[80px]">
          <h2 className="text-[#E12454] text-[20px] font-semibold">
            Our Mission & Vission
          </h2>
          <h1 className="text-[#223645] md:text-[50px] font-bold md:w-[80%] lg:w-[100%] md:leading-[80px]">
            Keep Going With Your Passion.
          </h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="lg:w-[450px] h-[2px] bg-gray-400"></div>
          <div className="flex gap-[30px] items-center">
            <i class="fa-solid fa-xmark text-[40px]"></i>
            <h4 className="text-[#223645] text-[20px]">
              It enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </h4>
          </div>
          <div className="lg:w-[450px] h-[2px] bg-gray-400"></div>
          <div className="flex gap-[30px] items-center">
            <i class="fa-solid fa-xmark text-[40px]"></i>
            <h4 className="text-[#223645] text-[20px]">
              It enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </h4>
          </div>
        </div>
        <img
          className="sm:w-[50%] md:w-[100%] lg:w-[50%] h-[500px] object-cover"
          src="../../../doctor2.png"
          alt=""
        />
      </div>
    </div>
  );
}
