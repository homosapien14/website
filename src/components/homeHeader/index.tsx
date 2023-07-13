import React from "react";
// import styles from "./header.module.css";
import Image from "next/image";
import { c4gtImage, oniImage, dgpImage } from "@/component/assets/images";

export const HomeHeader = () => {
  return (
    <div className="w-full mx-auto  mt-4 sm:px-6 lg:px-8 relative">
      <div className="  flex flex-col-reverse text-slate-100 items-center justify-center md:flex-row">
        <div className="bg-primary-color w-full lg:w-2/5 sm:h-auto lg:h-[700px]  p-10 py-10">
          <h1 className="font-bold text-5xl leading-tight mb-3">
            Your code can impact millions
          </h1>
          <p className="font-regular text-lg leading-relaxed mb-4">
            Code for GovTech (C4GT) is a unique program aimed at creating
            India's first active open-source community of coders that can build
            and contribute to global{" "}
            <a
              className="text-white "
              href="https://www.codeforgovtech.in/digital-public-goods"
            >
              Digital Public Goods.
            </a>
          </p>
          <p className="font-regular text-base leading-relaxed mb-4">
            To ensure sustainable adoption of DPGs, building an open source
            community of vibrant young coders is key!
          </p>
          <p className="font-regular text-base leading-relaxed mb-4">
            If you want to use technology to create large scale impact, then
            this is the opportunity for you. Read ahead to know more!
          </p>
        </div>
        <div className="w-full  flex-shrink lg:w-1/2 relative ">
          <Image
            className="w-full md:h-full object-cover"
            src={c4gtImage}
            alt="c4gt Image"
          />
          <div className=" absolute  bottom-20 right-0  flex justify-between ">
            <Image
              className=""
              src={dgpImage}
              alt="c4gt Image"
              width={130}
              height={100}
            />
            <Image
              className=""
              src={oniImage}
              alt="c4gt Image"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
