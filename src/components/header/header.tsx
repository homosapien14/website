import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import C4GTImage from "../../assets/images/C4GT-Image.webp";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <div
      className={`${styles.container}  bg-indigo-950 mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <div className="flex flex-col-reverse text-slate-100 items-center justify-between lg:flex-row">
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-lg leading-relaxed mb-4">
            C4GT 2023 brings to you some key products being built in the Digital
            Public Goods ecosystem. This year we have numerous projects across
            products like DIGIT, CQube, Sunbird, UCI, and more!
          </p>
          <p className="text-base leading-relaxed mb-4">
            To explore projects in detail, visit the C4GT GitHub Wiki
          </p>
          <a
            href="https://github.com/C4GT"
            className="w-2/5 text-white hover:text-gray-200 font-medium bg-blue-500 hover:bg-blue-800 py-2 px-4 rounded-lg shadow transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaGithub size={20} className="mr-2" />
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
        <div className="w-full lg:w-1/2 mt-4">
          <Image
            className="w-full h-2/4 object-cover"
            src={C4GTImage}
            alt="Open Source Project Community"
          />
        </div>
      </div>
    </div>
  );
};
