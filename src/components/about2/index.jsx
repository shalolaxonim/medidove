import ButtonGreen from "../buttonGreen";

export default function About2() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row p-[20px] py-[80px] lg:p-[100px]">
        <div className="flex flex-wrap gap-[20px]">
          <div className="bg-white p-[50px] flex flex-col gap-[20px] w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-user-doctor text-[#FFAA16] text-[50px]"></i>
            <h4 className="text-[#1b1858] text-[25px] font-bold">
              Advanced Care
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[20px] w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-user-doctor text-[#FFAA16] text-[50px]"></i>
            <h4 className="text-[#1b1858] text-[25px] font-bold">
              Advanced Care
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[20px] w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-user-doctor text-[#FFAA16] text-[50px]"></i>
            <h4 className="text-[#1b1858] text-[25px] font-bold">
              Advanced Care
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="bg-white p-[50px] flex flex-col gap-[20px] w-[300px] hover:shadow-xl">
            <i class="fa-solid fa-user-doctor text-[#FFAA16] text-[50px]"></i>
            <h4 className="text-[#1b1858] text-[25px] font-bold">
              Advanced Care
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] lg:w-[80%] lg:text-start md:items-start">
          <h2 className="text-[#E12454] text-[20px] font-semibold">About Us</h2>
          <h1 className="text-[#223645] md:text-[50px] font-bold md:w-[80%] lg:w-[100%] md:leading-[80px]">
            Short Story About MediDove Clinic.
          </h1>
          <p>
            Ut enim d minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia.
          </p>
          <div className="flex gap-[30px] items-center">
            <div className="w-[50px] h-[50px] p-[20px] rounded-full bg-gray-400 flex items-center justify-center hover:bg-[#E12454] group">
              <i class="fa-solid fa-check text-gray-800 text-[20px] group-hover:text-white"></i>
            </div>
            <h4 className="text-[#223645] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
            </h4>
          </div>
          <div className="flex gap-[30px] items-center">
            <div className="w-[50px] h-[50px] p-[20px] rounded-full bg-gray-400 flex items-center justify-center hover:bg-[#E12454] group">
              <i class="fa-solid fa-check text-gray-800 text-[20px] group-hover:text-white"></i>
            </div>
            <h4 className="text-[#223645] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
            </h4>
          </div>
          <div className="flex gap-[30px] items-center">
            <div className="w-[50px] h-[50px] p-[20px] rounded-full bg-gray-400 flex items-center justify-center hover:bg-[#E12454] group">
              <i class="fa-solid fa-check text-gray-800 text-[20px] group-hover:text-white"></i>
            </div>
            <h4 className="text-[#223645] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.
            </h4>
          </div>
          <ButtonGreen btnText={"LEARN MORE"} />
        </div>
      </div>
    </div>
  );
}
