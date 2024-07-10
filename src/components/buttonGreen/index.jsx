export default function ButtonGreen({ btnText }) {
  return (
    <div className="flex bg-[#E12454] gap-[30px] rounded-[30px] p-[5px]">
      <div className="bg-white w-[50px] h-[50px] p-[10px] rounded-full flex justify-center items-center">
        <i class="fa-solid fa-plus text-[#223645]"></i>
      </div>
      <button className="text-white pr-[50px]">{btnText} MAKE APPOINTMENT</button>
    </div>
  );
}