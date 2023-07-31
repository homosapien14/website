import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { c4gtLogo } from "@/component/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

export const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const menuIcon = document.querySelector(".navbar-burger");
    const menu = document.querySelector(".navbar-menu");

    menuIcon.addEventListener("click", () => {
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        setMenuOpen(true); // Update the menu state
      } else {
        menu.classList.add("hidden");
        setMenuOpen(false); // Update the menu state
      }
    });
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const isActive = (path: string) => {
    if (path !== "/") {
      return pathName.startsWith(path) ? "text-red-700" : "";
    }
    return path == pathName ? "text-red-700" : "";
  };

  return (
    <div className="flex text-color-primary justify-between mx-4 lg:py-4 ">
      <div className="min-w-[96px] min-h-[80px]">
        <Image
          className="lg:w-40 lg:h-28 w-24 h-20 xs:ml-3 sm:ml-5 xs:mt-6 sm:mt-5 lg:mt-3"
          src={c4gtLogo}
          alt="logo"
          id="logo"
        />
      </div>
      <div className="items-center">
        <ul className="hidden w-full md:flex md:pt-10 pl-0 font-medium text-color-primary ">
          <li className={`lg:px-4 sm:px-3 cursor-pointer  ${isActive("/")}`}>
            <Link
              className="block py-2 pr-4 text-inherit hover:text-red-700 no-underline rounded "
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className={`group relative dropdown lg:px-4 sm:px-3 cursor-pointer ${isActive(
              "/c4gt23"
            )}`}
          >
            <div
              ref={dropdownRef}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="py-2 pr-4 text-inherit no-underline rounded flex items-center"
            >
              <Link
                className="block text-inherit hover:text-red-700 no-underline rounded "
                href="/c4gt23"
              >
                C4GT 2023
              </Link>
              <FiChevronDown
                className={`ml-1 inline-block transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownOpen && (
              <div className="b-0 absolute  h-auto sm:-left-28 border-0 text-color-primary">
                <ul className="text-sm top-0 sm:mt-4 mt-0 pt-2 w-56 px-2 bg-cyan-50">
                  <li className="py-2 hover:text-red-700 block cursor-pointer">
                    <Link
                      className="no-underline text-inherit"
                      href="/c4gt23/communityProgram"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Community Program Project
                    </Link>
                  </li>
                  <li className="py-2 hover:text-red-700 block cursor-pointer">
                    <Link
                      className="no-underline text-inherit"
                      href="/c4gt23/mentoringProgram"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Mentoring Program Project
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive(
              "/c4gt22"
            )}`}
          >
            <Link
              href="/c4gt22"
              className="block py-2 pr-4 text-inherit hover:text-red-700 no-underline rounded "
            >
              C4GT 2022
            </Link>
          </li>
          <li
            className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive(
              "/digitalPublicGoods"
            )}`}
          >
            <Link
              href="/digitalPublicGoods"
              className="block py-2 pr-4   text-inherit no-underline rounded "
            >
              Digital Public Goods
            </Link>
          </li>
          <li
            className={`lg:px-4 sm:px-3 cursor-pointer hover:text-red-700 ${isActive(
              "/leaderboard"
            )}`}
          >
            <Link
              href="/leaderboard"
              className="block py-2 pr-4   text-inherit no-underline rounded "
            >
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden absolute inset-y-0 right-0">
        <button className="navbar-burger text-black-600 m-12 pr-4">
          {menuOpen ? (
            <svg
              className="h-6 w-6 fill-current text-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close menu</title>
              <path d="M14.348 14.849a1 1 0 0 0 1.414-1.415L11.414 10l4.348-4.348a1 1 0 0 0-1.414-1.414L10 8.586 5.652 4.238a1 1 0 0 0-1.414 1.415L8.586 10l-4.348 4.348a1 1 0 0 0 1.414 1.414L10 13.414l4.348 4.348a1 1 0 0 0 1.414-1.414L11.414 10l4.348-4.348a1 1 0 0 0-1.414-1.414L10 8.586 5.652 4.238a1 1 0 0 0-1.414 1.415L8.586 10 4.238 14.348a1 1 0 0 0 1.414 1.414L10 13.414l4.348 4.348z"></path>
            </svg>
          ) : (
            <svg
              className="h-5 w-5 fill-current text-black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          )}
        </button>
      </div>
      <div className="navbar-menu relative z-10 hidden md:hidden ">
        <nav className="fixed top-0 left-0 bottom-0 text-white flex flex-col w-2/5 max-w-sm py-6 px-6 border-r bg-primary-color  w-[75vw]">
          <div className="flex items-center mb-8 ml-2 ">
            <Link className="mr-auto text-3xl font-bold leading-none" href="/">
              <Image className="w-20 mt-2" src={c4gtLogo} alt="logo" />
            </Link>
          </div>
          <div className=" ">
            <ul className="flex flex-col ">
              <li className="cursor-pointer mb-4 border-b-2  hover:text-red-700 ">
                <Link
                  className="block py-2 pr-4 text-sm font-semibold text-inherit  no-underline rounded "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`cursor-pointer  hover:text-red-700  group mb-4 border-b-2 ${isActive(
                  "/c4gt23"
                )}`}
              >
                <div
                  ref={dropdownRef}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block py-2 pr-4 text-inherit font-semibold  no-underline rounded flex items-center"
                >
                  <span className=" text-sm text-inherit font-semibold">
                    C4GT 2023
                  </span>
                  <FiChevronDown
                    className={`ml-1 inline-block transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownOpen && (
                  <div
                    className=" bg-transparent  sm:left-20 py-0 text-sm  z-50 border-0"
                    id="dropdown"
                  >
                    <ul className="font-semibold text-color-primary text-sm w-56 bg-cyan-50 pl-4">
                      <li className="cursor-pointer py-2  block ">
                        <Link
                          className="no-underline text-color-primary hover:text-red-700"
                          href="/c4gt23/communityProgram"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          Community Program Project
                        </Link>
                      </li>
                      <li className="cursor-pointer py-2 block  ">
                        <Link
                          className="no-underline text-color-primary hover:text-red-700"
                          href="/c4gt23/mentoringProgram"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                          Mentoring Program Project
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="cursor-pointer mb-4  hover:text-red-700  border-b-2">
                <Link
                  className="block  py-2 pr-4 text-sm text-inherit font-semibold no-underline rounded "
                  href="/c4gt22"
                >
                  C4GT 2022
                </Link>
              </li>
              <li className="cursor-pointer mb-4 hover:text-red-700 border-b-2">
                <Link
                  className="block py-2 pr-4 text-sm text-inherit font-semibold  no-underline rounded "
                  href="/digitalPublicGoods"
                >
                  Digital Public Goods
                </Link>
              </li>
              <li className="cursor-pointer mb-4 hover:text-red-700 border-b-2">
                <Link
                  className="block py-2 pr-4 text-sm text-inherit font-semibold  no-underline rounded "
                  href="/leaderboard"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
