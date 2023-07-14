import React from "react";
import Image from "next/image";
import { IconType } from "react-icons/lib";

interface InfoIconProps {
    icon: IconType;
    count: string;
    desc: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ icon: Icon, count, desc }) => {
    return (
        <div className="flex flex-col justify-center items-center pl-6 pr-6 lg:px-8 py-3 lg:hover:-translate-y-4 transition-transform ease-in duration-200">
            {/* if we want to add an image instead of an icon we can use the below code */}
            {/* <Image src={iconImageUrl} alt={`${desc} icon`}></Image> */}
            <Icon color="black" size={67} />
            <span className="mt-4 mb-3 text-4xl font-bold text-blue-950">{count}</span>
            <span className="font-regular w-min min-w-fit text-center text-black">{desc}</span>
        </div >
    );
};