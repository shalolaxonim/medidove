import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="flex justify-between gap-[50px] bg-white px-[150px] py-[20px] items-center sticky top-[65px] right-0 left-0 mb-[10px]">
        <div className="flex gap-[20px] items-center">
          <div className="bg-[#E12454] rounded-full p-[20px] w-[80px] h-[80px] flex items-center justify-center text-[50px]">
            <i class="fa-solid fa-staff-snake text-white"></i>
          </div>
          <h2 className="text-[#223645] text-[35px] font-semibold">MediDove</h2>
        </div>
        <div className="flex gap-[30px] text-[#223645] items-center">
          <div className="text-[#223645] flex gap-[30px]">
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">Home +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>Home 1</MenuItem>
                <MenuItem>Home 2</MenuItem>
                <MenuItem>Home 3</MenuItem>
                <MenuItem>Home 4</MenuItem>
                <MenuItem>Home 5</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">Department +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>Services 1</MenuItem>
                <MenuItem>Services 2</MenuItem>
                <MenuItem>Services Details</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">Doctors +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>Doctors 1</MenuItem>
                <MenuItem>Doctors 2</MenuItem>
                <MenuItem>Doctors Details</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">Shop +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>Shop Page</MenuItem>
                <MenuItem>Shopping Details 2</MenuItem>
                <MenuItem>Shopping Cart</MenuItem>
                <MenuItem>Checkout</MenuItem>
                <MenuItem>Wishlist</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Register</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">News +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>Blog Right Sidebar</MenuItem>
                <MenuItem>Blog Left Sidebar</MenuItem>
                <MenuItem>Blog No Sidebar</MenuItem>
                <MenuItem>Blog 2 Column</MenuItem>
                <MenuItem>Blog 2 Col Masonry</MenuItem>
                <MenuItem>Blog 3 Column</MenuItem>
                <MenuItem>Blog 3 Col Masonry</MenuItem>
                <MenuItem>Blog Details</MenuItem>
                <MenuItem>Details Left Sidebar</MenuItem>
                <MenuItem>Details Audio</MenuItem>
                <MenuItem>Details Video</MenuItem>
                <MenuItem>Details Gallery</MenuItem>
              </MenuList>
            </Menu>
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">Pages +</p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>About</MenuItem>
                <MenuItem>Appointment</MenuItem>
                <MenuItem>Portfolio 2 Column</MenuItem>
                <MenuItem>Portfolio 3 Column</MenuItem>
                <MenuItem>Portfolio Slider</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>404 Page</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div className="flex gap-[20px] text-[#223645]">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-behance"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src="../../../uk.png" alt="" className="w-[50px]" />
            <Menu placement="bottom" allowHover>
              <MenuHandler>
                <p className="text-[#223645] font-semibold">
                  En
                  <i class="fa-solid fa-chevron-down"></i>
                </p>
              </MenuHandler>
              <MenuList className="flex flex-col bg-white p-[20px] border-t-[10px] border-[#E12454] text-[#223645] gap-[10px] mt-[15px] shadow-lg">
                <MenuItem>USA</MenuItem>
                <MenuItem>UK</MenuItem>
                <MenuItem>CA</MenuItem>
                <MenuItem>AU</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
