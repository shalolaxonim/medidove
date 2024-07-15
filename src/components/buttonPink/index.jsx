export default function ButtonPink({ btnText }) {
  return (
    <div className="flex bg-[#8FB569] gap-[30px] rounded-[30px] p-[5px] hover:cursor-pointer hover:bg-[#E12454]">
      <div className="bg-white w-[50px] h-[50px] p-[10px] rounded-full flex justify-center items-center">
        <i class="fa-solid fa-plus text-[#223645]"></i>
      </div>
      <button className="text-white pr-[50px]">{btnText}</button>
    </div>
  );
}
