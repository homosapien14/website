import React, { useEffect } from "react";
import Image from "next/image";
import { c4gtLogo } from "@/component/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Navbar = () => {
  const pathName = usePathname();
  
  useEffect(() => {
    const menuIcon = document.querySelector(".navbar-burger");
    const menu = document.querySelector(".navbar-menu");

    menuIcon.addEventListener("click", () => {
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
      } else {
        menu.classList.add("hidden");
      }
    });
  }, []);
  const isActive = (path:String) => {
    return pathName === path ? "text-red-700" : "";
  };
  return (
    <div className="flex text-color-primary justify-between mx-4 lg:py-4 ">
      <div className="min-w-[96px] min-h-[80px]">
        <Image
          className="lg:w-40 lg:h-28 w-24 h-20 ml-5 sm:mt-5 lg:mt-3"
          src={c4gtLogo}
          alt="logo"
          id="logo"
        />
      </div>
      <div className="items-center">
        <ul className="hidden w-full md:flex md:pt-10 pl-0 font-medium ">
          <li className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive("/")}`}>
            <Link 
            className="block py-2 pr-4 text-inherit no-underline rounded "
            href="/">Home</Link>
          </li>
          <li className={`group relative dropdown lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive("/c4gt23/mentoringProgram")}`}>
            <Link href="/c4gt23/mentoringProgram"
             className="block py-2 pr-4 text-inherit no-underline rounded ">C4GT 2023</Link>
            <div className="group-hover:block dropdown-menu pb-0 absolute hidden h-auto sm:-left-28 border-0">
              <ul className=" text-sm top-0 sm:mt-4 mt-0 pt-2 w-56 px-2 bg-cyan-50">
                <li className="py-2 hover:text-red-700 block cursor-pointer">
                  <Link className="no-underline text-inherit " href="/c4gt23/communityProgram">Community Program Project</Link>
                </li>
                <li className="py-2 hover:text-red-700 block  cursor-pointer">
                  <Link className="no-underline text-inherit " href="/c4gt23/mentoringProgram"
                   >Mentoring Program Project</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive("/c4gt22")}`}>
            <Link href="/c4gt22" className="block py-2 pr-4 text-inherit hover:text-red-700 no-underline rounded ">C4GT 2022</Link>
          </li>
          <li className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive("/digitalPublicGoods")}`}>
            <Link href="/digitalPublicGoods"
            className="block py-2 pr-4   text-inherit no-underline rounded ">Digital Public Goods</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden absolute inset-y-0 right-0">
        <button className="navbar-burger text-black-600 m-12 pr-4">
          <svg
            className="h-5 w-5 fill-current text-black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="navbar-menu relative z-10 hidden md:hidden ">
        <nav className="fixed top-0 left-0 bottom-0 text-white flex flex-col w-2/5 max-w-sm py-6 px-6 border-r bg-primary-color  min-w-[183px]">
          <div className="flex items-center mb-8 ml-2 ">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image className="w-20 mt-2" src={c4gtLogo} alt="logo" />
            </Link>
          </div>
          <div className=" ">
            <ul className="flex flex-col ">
              <li className="cursor-pointer mb-4 border-b-2  hover:text-red-700 ">
                <Link
                  className="block py-2 pr-4 text-xs font-semibold text-inherit  no-underline rounded "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer  hover:text-red-700  group mb-4 border-b-2">
                <Link
                  className="block py-2 pr-4 text-xs font-semibold text-inherit no-underline rounded "
                  href="/c4gt23/mentoringProgram"
                >
                  C4GT 2023
                </Link>
                <div
                  className="group-hover:block dropdown-menu bg-transparent  sm:left-20 py-0 text-xs hidden z-50 border-0"
                  id="dropdown"
                >
                  <ul className="font-semibold text-color-primary text-sm w-56 bg-cyan-50 pl-4">
                    <li className="cursor-pointer py-2  block ">
                      <Link className="no-underline text-color-primary hover:text-red-700" href="/c4gt23/communityProgram">Community Program Project</Link>
                    </li>
                    <li className="cursor-pointer py-2 hover:text-red-700 block  ">
                      <Link className="no-underline text-color-primary hover:text-red-700" href="/c4gt23/mentoringProgram">Mentoring Program Project</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="cursor-pointer mb-4  hover:text-red-700  border-b-2">
                <Link
                  className="block  py-2 pr-4 text-xs text-inherit font-semibold no-underline rounded "
                  href="/c4gt22"
                >
                  C4GT 2022
                </Link>
              </li>
              <li className="cursor-pointer mb-4 hover:text-red-700 border-b-2">
                <Link
                  className="block py-2 pr-4 text-xs text-inherit font-semibold  no-underline rounded "
                  href="/digitalPublicGoods"
                >
                  Digital Public Goods
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
