import ButtonGreen from "../buttonGreen";

export default function HealthCare() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between bg-[#8FB569] text-white items-center lg:px-[200px] lg:gap-[60px] p-[30px] py-[80px]">
        <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <div className="flex flex-col gap-[30px]">
            <h5 className="text-[20px] font-semibold">Health Care Services</h5>
            <h2 className="text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[80%]">
              Don’t Hesitate, Contact Us For Better Help & Services.
            </h2>
          </div>
          <div className="">
            <ButtonGreen btnText={"MAKE APPOINTMENT"} />
          </div>
        </div>
      </div>
    </div>
  );
}
