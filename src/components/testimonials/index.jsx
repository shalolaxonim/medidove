import Link from "antd/es/typography/Link";

export default function Testimonials() {
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[80px]">
        <h5 className="text-gray-500 text-[20px] font-semibold">
          Testimonials
        </h5>
        <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[40%] text-center">
          Our Happy Clients Says About Us.
        </h2>
        <div className="flex gap-[10px]">
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-center p-[20px]">
          <div className="flex flex-col gap-[10px] w-[400px] p-[50px] group">
            <div className="flex gap-[50px] lg:justify-between items-center">
              <div className="bg-[#8FB569] group-hover:bg-[#E12454] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <i class="fa-solid fa-quote-left text-white"></i>
              </div>
              <div>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <h4 className="text-[#223645] font-bold">
              Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex gap-[30px] items-center flex-wrap">
              <img
                src="../../../../avatar1.png"
                className="rounded-full bg-gray-300 w-[80px]"
                alt=""
              />
              <div>
                <h4 className="text-[#223645] font-bold">
                  Rosalina D. Williamson
                </h4>
                <h5 className="text-[#8FB569]">FOUNDER</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[400px] p-[50px] group">
            <div className="flex gap-[50px] lg:justify-between items-center">
              <div className="bg-[#8FB569] group-hover:bg-[#E12454] w-[50px] h-[50px] rounded-full flex justify-center items-center">
                <i class="fa-solid fa-quote-left text-white"></i>
              </div>
              <div>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <h4 className="text-[#223645] font-bold">
              Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
            </h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex gap-[30px] items-center flex-wrap">
              <img
                src="../../../../avatar1.png"
                className="rounded-full bg-gray-300 w-[80px]"
                alt=""
              />
              <div>
                <h4 className="text-[#223645] font-bold">
                  Rosalina D. Williamson
                </h4>
                <h5 className="text-[#8FB569]">FOUNDER</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
