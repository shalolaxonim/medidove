export default function PartOne() {
  return (
    <div>
      <div className="hidden md:flex bg-blue-50 justify-between px-[40px] lg:px-[250px] text-gray-500">
        <div className="flex gap-[50px] py-[20px] items-center">
          <div className="flex gap-[10px] items-center">
            <i class="fa-solid fa-phone-flip"></i>
            <p>+1 800 833 9780</p>
          </div>
          <div className="flex gap-[10px] items-center">
            <i class="fa-solid fa-envelope"></i>
            <p>info@example.com</p>
          </div>
        </div>
        <button className="bg-[#E12454] py-[10px] px-[40px] text-white">
          MAKE APPOINTMENT
        </button>
      </div>
    </div>
  );
}
