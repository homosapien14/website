import React from "react";
import Image from "next/image";
import { highlights22 } from "@/component/assets/images";

export const HeaderCard = () => {
    return (
        <div className="flex flex-col items-stretch lg:flex-row lg:items-center w-full lg:w-11/12 mx-auto my-5 bg-primary-color text-white lg:rounded-md overflow-hidden">
            <div className="w-5/6 lg:w-1/2 lg:p-8 mx-auto my-8 lg:my-0 h-full">
                <h2 className="text-4xl lg:text-7xl font-bold">Highlights from 2022</h2>
                <p className="my-6 lg:leading-loose">
                    Code for GovTech (C4GT) was launched in May 2022, as an ecosystem-led annual coding program for engineering students, offering them the opportunity to work on Digital Public Goods (DPGs) aimed at solving governance challenges, with 1:1 mentorship from experienced practitioners in leading GovTech organizations. The first edition of C4GT concluded successfully on 17th August 2022.
                </p>

                <span>Here are some of the key highlights from 2022.</span>
            </div>

            <div className="w-5/6 lg:w-1/2 pb-8 lg:pb-0 mx-auto my-auto">
                <Image src={highlights22} className="rounded-sm lg:rounded-none" alt="C4GT 2022 Program Highlights" title="C4GT 2022 Program Highlights"></Image>
            </div>
        </div>
    );
};