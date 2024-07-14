import ButtonGreen from "../buttonGreen";

export default function AvailablePart() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between bg-[#13232F] items-center lg:px-[200px] lg:gap-[60px] p-[30px] py-[80px]">
        <div className="lg:w-[80%] flex flex-col gap-[30px] items-start text-start lg:text-start lg:items-start">
          <h2 className="text-gray-500 text-[20px] font-semibold">
            We are available 24/7
          </h2>
          <h1 className="text-white text-[30px] md:text-[60px] font-bold md:leading-[70px]">
            We Always Ready For A Challenge.
          </h1>
          <ButtonGreen />
        </div>
        <div className="lg:w-[80%] flex flex-col gap-[30px]">
          <div className="flex md:gap-[40px] items-center flex-col md:flex-row">
            <h2 className="text-[#8FB569] text-[50px] font-semibold">1M+</h2>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-white">
                <i class="fa-solid fa-user text-white"></i> Satisfied Patients
              </h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                perferendis voluptatem vero deleniti, tenetur numquam laboriosam
                ea pariatur magnam.
              </p>
            </div>
          </div>
          <div className="flex md:gap-[40px] items-center flex-col md:flex-row">
            <h2 className="text-[#8FB569] text-[50px] font-semibold">1M+</h2>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-white">
                <i class="fa-solid fa-user text-white"></i> Satisfied Patients
              </h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                perferendis voluptatem vero deleniti, tenetur numquam laboriosam
                ea pariatur magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
