import Link from "antd/es/typography/Link";

export default function News2() {
  return (
    <div>
      <div className="bg-[#F4F9FC] flex flex-col items-center gap-[20px] md:gap-[40px] px-[30px] py-[50px] lg:p-[80px]">
        <h5 className="text-gray-500 text-[20px] font-semibold">News</h5>
        <h2 className="text-[#223645] text-[30px] md:text-[50px] font-bold md:leading-[60px] lg:w-[40%] text-center">
          Get Every Single Updates From Here.
        </h2>
        <div className="flex gap-[10px]">
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[70px] h-[2px]"></span>
          <span className="bg-[#E12454] w-[20px] h-[2px]"></span>
        </div>
        <div className="flex flex-wrap gap-[30px] justify-center">
          <div className="flex flex-col gap-[10px] w-[400px] relative">
            <img
              src="../../../../doctor2.png"
              className="h-[300px] object-cover"
              alt=""
            />
            <div className="p-[50px] relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
              <div className="flex gap-[50px]">
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medical,
                  </h5>
                </Link>
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medicine
                  </h5>
                </Link>
              </div>
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
                  Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
                </h4>
              </Link>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[400px] relative">
            <img
              src="../../../../doctor2.png"
              className="h-[300px] object-cover"
              alt=""
            />
            <div className="p-[50px] relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
              <div className="flex gap-[50px]">
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medical,
                  </h5>
                </Link>
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medicine
                  </h5>
                </Link>
              </div>
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
                  Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
                </h4>
              </Link>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[400px] relative">
            <img
              src="../../../../doctor2.png"
              className="h-[300px] object-cover"
              alt=""
            />
            <div className="p-[50px] relative -top-[40px] flex flex-col self-center w-[350px] bg-white">
              <div className="flex gap-[50px]">
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medical,
                  </h5>
                </Link>
                <Link>
                  <h5 className="text-[#8FB569] hover:text-[#E12454] font-semibold">
                    Medicine
                  </h5>
                </Link>
              </div>
              <Link>
                <h4 className="text-[#223645] font-bold hover:text-[#E12454]">
                  Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
                </h4>
              </Link>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
