import ButtonGreen from "../buttonGreen";

export default function Showcase2() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-red-300 bg-[url('../../../doctor.webp')] bg-no-repeat bg-cover bg-right">
        <div className="flex flex-col gap-[20px] p-[20px] lg:p-[100px] lg:w-[50%] items-center text-center lg:text-start lg:items-start py-[80px]">
          <h2 className="text-gray-500 text-[20px] font-semibold">
            We are here for your care.
          </h2>
          <h1 className="text-[#223645] text-[40px] md:text-[90px] font-bold md:leading-[100px]">
            Best Care & Best Doctor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores voluptas pariatur dicta vitae laborum omnis, rem provident
            labore.
          </p>
          <div className="flex gap-[30px] items-center flex-col md:flex-row">
            <ButtonGreen btnText={"MAKE APPOINTMENT"} />
            <div className="bg-[#8FB569] w-[60px] h-[60px] rounded-full p-[10px] flex justify-center items-center">
              <i class="fa-solid fa-play text-white"></i>
            </div>
          </div>
        </div>
        {/* <img
          className="sm:w-[50%] md:w-[100%] lg:w-[50%]"
          src="../../../doctor.webp"
          alt=""
        /> */}
      </div>
    </div>
  );
}
