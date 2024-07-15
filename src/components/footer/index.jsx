import Link from "antd/es/typography/Link";

export default function Footer() {
  return (
    <div className="bg-[#13232F] flex gap-[20px] lg:px-[200px] p-[20px] py-[80px] justify-between lg:items-center flex-col lg:flex-row">
      <div className="bg-white md:shadow-md md:shadow-white p-[50px] w-[300px] lg:w-[400px] rounded-2xl flex flex-col gap-[20px]">
        <div className="flex gap-[30px]">
          <i class="fa-solid fa-phone-flip text-[#E12454] text-[30px]"></i>
          <div>
            <h6 className="text-gray-500 text-[20px]">Emergency number</h6>
            <h2 className="text-[30px] text-blue-950 font-bold">
              202-555-0104
            </h2>
          </div>
        </div>
        <Link>
          <img src="../../../logo.png" alt="" />
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <h4 className="text-gray-500">
          <i class="fa-regular fa-envelope text-gray-500"></i> &nbsp;
          info@examplemedical.com
        </h4>
        <h4 className="text-gray-500">
          <i class="fa-regular fa-clone text-gray-500"></i> &nbsp;
          examplemedical.com
        </h4>
        <h4 className="text-gray-500">
          <i class="fa-regular fa-flag text-gray-500"></i> &nbsp; 227 Marion
          Street, Columbia
        </h4>
      </div>
      <div className="flex flex-col gap-[30px] text-gray-400 font-bold">
        <h4 className="text-white text-[30px]">Departments</h4>
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
      <div className="flex flex-col gap-[30px] text-gray-400 font-bold">
        <h4 className="text-white text-[30px]">Quick Links</h4>
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
  );
}
