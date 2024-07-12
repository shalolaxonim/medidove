import ButtonGreen from "../buttonGreen";

export default function Showcase2() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-red-300">
        <div className="flex flex-col gap-[20px] bg-gray-300 p-[20px] md:p-[100px] md:w-[50%] items-center text-center md:text-start md:items-start py-[80px]">
          <h2 className="text-gray-500 text-[20px] font-semibold">
            We are here for your care.
          </h2>
          <h1 className="text-[#223645] md:text-[90px] font-bold md:leading-[100px]">
            Best Care & Best Doctor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            dolores voluptas pariatur dicta vitae laborum omnis, rem provident
            labore.
          </p>
          <div className="flex gap-[30px] items-center flex-col md:flex-row">
            <ButtonGreen />
            <div className="bg-[#8FB569] w-[60px] h-[60px] rounded-full p-[10px] flex justify-center items-center">
              <i class="fa-solid fa-play text-white"></i>
            </div>
          </div>
        </div>
        <img className="sm:w-[50%]" src="../../../doctor.webp" alt="" />
      </div>
    </div>
  );
}
