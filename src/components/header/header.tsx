import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { githubIcon, codeImage } from "@/component/assets/images";


export const Header = () => {
  return (
    <div
      className={`${styles.container} w-full lg:w-11/12 mx-auto mt-5`}
    >
      <div className="bg-primary-color flex flex-col-reverse text-slate-100 items-center justify-between md:flex-row lg:rounded-md overflow-hidden">
        <div className="w-full lg:w-1/2  p-8 py-6">
          <h1 className="font-bold text-5xl leading-tight mb-3">Mentoring Program Projects</h1>
          <p className="font-regular text-lg leading-relaxed mb-4">
            C4GT 2023 brings to you some key products being built in the Digital
            Public Goods ecosystem. This year we have numerous projects across
            products like DIGIT, CQube, Sunbird, UCI, and more!
          </p>
          <p className="font-regular text-base leading-relaxed mb-4">
            To explore projects in detail, visit the C4GT GitHub Wiki
          </p>
          <a
            href="https://github.com/C4GT"
            className="bg-rose-900 w-3/5 sm:w-2/5 text-white hover:text-gray-200 font-medium hover:bg-green-700 py-2 px-4 rounded-lg shadow transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Image className="mr-2" width={30} height={30} src={githubIcon} alt='github-icon' />
            Explore Here
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="w-full flex-shrink lg:w-1/2 ">
          <Image
            className="w-full sm:h-[250px] md:h-full object-cover"
            src={codeImage}
            alt="Open Source Project Community"
          />
        </div>
      </div>
    </div>
  );
};
