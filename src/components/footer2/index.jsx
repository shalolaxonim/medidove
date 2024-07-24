import Link from "antd/es/typography/Link";
import { Button, Input, Space } from "antd";
const { Search } = Input;

export default function Footer2() {
  return (
    <div className="bg-[#13232F] flex gap-[50px] lg:gap-[80px] lg:px-[200px] p-[20px] py-[80px] justify-between lg:items-center flex-col">
      <div className="flex justify-between gap-[20px] lg:gap-[80px] text-white items-center flex-wrap">
        <h2 className="text-[50px] font-bold">MediDove</h2>
        <p className="hidden lg:block">Subscribe to Our Newsletter</p>
        <Space.Compact className="hidden md:flex">
          <Input
            defaultValue="Enter your email address"
            className="rounded-3xl h-[50px] bg-gray-100 px-[30px]"
          />
          <Button type="primary" className="rounded-3xl h-[50px] bg-[#E12454]">
            Subscribe
          </Button>
        </Space.Compact>
      </div>
      <div className="bg-gray-400 w-[100%] h-[2px]"></div>
      <div className="flex gap-[30px] lg:gap-[0px] flex-wrap">
        <div className="w-[300px] lg:w-[400px] rounded-2xl flex flex-col gap-[20px]">
          <div className="flex gap-[30px]">
            <i class="fa-solid fa-phone-flip text-[#E12454] text-[30px]"></i>
            <div>
              <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
              <h2 className="text-[30px] text-white font-bold">202-555-0104</h2>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <i class="fa-solid fa-envelope text-[#E12454] text-[30px]"></i>
            <div>
              <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
              <h2 className="text-[30px] text-white font-bold">202-555-0104</h2>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <i class="fa-solid fa-envelope text-[#E12454] text-[30px]"></i>
            <div>
              <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
              <div className="text-[30px] text-white font-bold gap-[20px] flex mt-[10px]">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-square-behance"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] text-gray-400 font-bold">
          <h4 className="text-white text-[30px]">Departments</h4>
          <div className="flex flex-wrap">
            <div className="flex flex-col gap-[30px]">
              <Link>
                <h6 className="text-gray-500">Surgery and Radiology</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Family Medicine</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Women’s Health</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Optician</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Pediatrics</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Dermatology</h6>
              </Link>
            </div>
            <div className="flex flex-col gap-[30px]">
              <Link>
                <h6 className="text-gray-500">Departments</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Our Doctors</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">News</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Shop</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Contact Us</h6>
              </Link>
              <Link>
                <h6 className="text-gray-500">Book an Appointment</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] text-gray-400 font-bold">
          <h4 className="text-white text-[30px]">Quick Links</h4>
          <div className="flex gap-[30px] items-center">
            <img
              src="../../../../avatar1.png"
              className="rounded-full bg-gray-300 w-[80px]"
              alt=""
            />
            <div className="gap-[10px] flex flex-col">
              <h5 className="hover:text-[#8FB569] lg:w-[80%]">
                Lorem ipsum dolor sit am et, consectetur.
              </h5>
              <h4 className="text-gray-600">14 Feb 2022</h4>
            </div>
          </div>
          <div className="flex gap-[30px] items-center">
            <img
              src="../../../../avatar1.png"
              className="rounded-full bg-gray-300 w-[80px]"
              alt=""
            />
            <div className="gap-[10px] flex flex-col">
              <h5 className="hover:text-[#8FB569] lg:w-[80%]">
                Lorem ipsum dolor sit am et, consectetur.
              </h5>
              <h4 className="text-gray-600">14 Feb 2022</h4>
            </div>
          </div>
          <div className="flex gap-[30px] items-center">
            <img
              src="../../../../avatar1.png"
              className="rounded-full bg-gray-300 w-[80px]"
              alt=""
            />
            <div className="gap-[10px] flex flex-col">
              <h5 className="hover:text-[#8FB569] lg:w-[80%]">
                Lorem ipsum dolor sit am et, consectetur.
              </h5>
              <h4 className="text-gray-600">14 Feb 2022</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-[100%] h-[2px]"></div>
      <p className="text-white text-center">
        Copyright ©2022 Basictheme. All rights reserved
      </p>
    </div>
  );
}
