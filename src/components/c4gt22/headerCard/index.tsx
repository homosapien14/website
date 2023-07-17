import React from "react";
import Image, { StaticImageData } from "next/image";

interface HeaderCardProps {
    headerData: {
        title: string;
        description: string[];
        image: StaticImageData;
    };
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ headerData }) => {

    return (
        <div className="flex flex-col items-stretch lg:flex-row lg:items-center w-full lg:w-11/12 mx-auto my-5 bg-primary-color text-white lg:rounded-md overflow-hidden">
            <div className="w-5/6 lg:w-1/2 lg:p-8 mx-auto my-8 lg:my-0 h-full">
                <h2 className="text-4xl lg:text-7xl font-bold">{headerData.title}</h2>
                {headerData.description.map((headerContent, index) => (
                    <p className="my-6 lg:leading-loose" key={index}>
                        {headerContent}
                    </p>
                ))}
            </div>

            <div className="w-5/6 lg:w-1/2 pb-8 lg:pb-0 mx-auto my-auto">
                <Image src={headerData.image} className="rounded-sm lg:rounded-none" alt="C4GT Program Highlights" title="C4GT Program Highlights"></Image>
            </div>
        </div>
    );
};