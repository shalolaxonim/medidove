import ButtonGreen from "../buttonGreen";

export default function About() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row py-[80px] lg:p-[100px]">
        <img
          className="sm:w-[50%] md:w-[100%] lg:w-[50%] object-cover"
          src="../../../doctor2.png"
          alt=""
        />
        <div className="flex flex-col gap-[20px] p-[20px] lg:p-[100px] lg:w-[50%] lg:text-start lg:items-start py-[80px]">
          <h2 className="text-gray-500 text-[20px] font-semibold">About Us</h2>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex gap-[30px] items-center">
            <img
              src="../../../../avatar1.png"
              className="rounded-full bg-gray-300 w-[80px]"
              alt=""
            />
            <div>
              <h4 className="text-[#223645] font-bold">
                Rosalina D. Williamson
              </h4>
              <h5 className="text-red-600 font-semibold">FOUNDER</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
