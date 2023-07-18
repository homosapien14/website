import React from "react";
import Image from "next/image";
// import ProjectReport from "../../../assets/images/project-report-2022.webp";
import { projectReport22 } from "@/component/assets/images";

export const InfoCard = () => {
    return (
        <div className="mt-14 bg-gradient-to-br from-sky-100 to-sky-200">
            <h3 className="w-5/6 lg:w-full mx-auto text-4xl lg:text-5xl text-center font-bold text-blue-950 py-8">All about C4GT 2022</h3>
            <div className="w-3/4 mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-stretch xl:items-start pb-5">
                <div className="w-full lg:mx-4">
                    <h3 className="text-3xl text-center font-demi text-blue-950 py-8">Inauguration Event</h3>
                    <iframe className="w-full h-96 lg:h-[450px]" src="https://www.youtube.com/embed/g7mfJe75spc?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="w-full lg:mx-4">
                    <h3 className="text-3xl text-center font-demi text-blue-950 py-8">Program Report</h3>
                    <a href="https://drive.google.com/file/d/1n2l_7Njd7_2VGCLrJixBjt7142J3t1q9/view?usp=share_link" rel="noreferrer noopener" target="_blank" className="">
                        <Image className="w-full h-96 lg:h-[450px]" src={projectReport22} alt="C4GT 2022 Project Report" title="C4GT 2022 Project Report"></Image>
                    </a>
                </div>

                <div className="w-full lg:mx-4">
                    <h3 className="text-3xl text-center font-demi text-blue-950 py-8">After Movie</h3>
                    <iframe className="w-full h-96 lg:h-[450px]" src="https://www.youtube.com/embed/U8JJHxgs9is?controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div >
    );
};