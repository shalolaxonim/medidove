import Link from "antd/es/typography/Link";
import ButtonGreen from "../buttonGreen";
import ButtonPink from "../buttonPink";

export default function News() {
  return (
    <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] lg:gap-[60px] px-[30px] py-[50px] lg:p-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[30px]">
          <h5 className="text-gray-500 text-[20px] font-semibold">News</h5>
          <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[60%]">
            Get Every Single Updates Here.
          </h2>
          <div className="flex gap-[10px]">
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
            <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          </div>
        </div>
        <div className="hidden lg:block">
          <ButtonGreen btnText={"OUR BLOG"} />
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center p-[20px]">
        <div className="flex flex-col gap-[10px] w-[400px]">
          <img
            src="../../../../doctor2.png"
            className="h-[300px] object-cover"
            alt=""
          />
          <div className="flex gap-[50px] text-[#E12454]">
            <Link>
              <h5 className="text-[#E12454] font-semibold">Medical,</h5>
            </Link>
            <Link>
              <h5 className="text-[#E12454] font-semibold">Medicine</h5>
            </Link>
          </div>
          <Link>
            <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
              Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
            </h4>
          </Link>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] w-[400px]">
          <img
            src="../../../../doctor2.png"
            className="h-[300px] object-cover"
            alt=""
          />
          <div className="flex gap-[50px] text-[#E12454]">
            <Link>
              <h5 className="text-[#E12454] font-semibold">Medical,</h5>
            </Link>
            <Link>
              <h5 className="text-[#E12454] font-semibold">Medicine</h5>
            </Link>
          </div>
          <Link>
            <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
              Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
            </h4>
          </Link>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex flex-col gap-[10px] w-[400px] p-[50px] border-[2px] border-gray-200">
          <Link>
            <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
              Lorem ipsum dolor sit amet, consectetur adidis.
            </h4>
          </Link>
          <div className="flex gap-[40px]">
            <p className="text-gray-500">
              <i class="fa-regular fa-calendar text-gray-500"></i> 23rd Jan 2022
            </p>
            <p className="text-gray-500">
              <i class="fa-regular fa-comments text-gray-500"></i> 33 Comments
            </p>
          </div>
          <div className="bg-gray-200 h-[1px] w-[300px] my-[15px] rounded-full"></div>
          <Link>
            <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
              Lorem ipsum dolor sit amet, consectetur adidis.
            </h4>
          </Link>
          <div className="flex gap-[40px]">
            <p className="text-gray-500">
              <i class="fa-regular fa-calendar text-gray-500"></i> 23rd Jan 2022
            </p>
            <p className="text-gray-500">
              <i class="fa-regular fa-comments text-gray-500"></i> 33 Comments
            </p>
          </div>
          <div className="bg-gray-200 h-[1px] w-[300px] my-[15px] rounded-full"></div>
          <Link>
            <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
              Lorem ipsum dolor sit amet, consectetur adidis.
            </h4>
          </Link>
          <div className="flex gap-[40px]">
            <p className="text-gray-500">
              <i class="fa-regular fa-calendar text-gray-500"></i> 23rd Jan 2022
            </p>
            <p className="text-gray-500">
              <i class="fa-regular fa-comments text-gray-500"></i> 33 Comments
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex self-end mr-[70px]">
        <ButtonPink btnText={"MAKE CALL"} />
      </div>
    </div>
  );
}
