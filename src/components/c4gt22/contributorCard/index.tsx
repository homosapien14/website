import React from "react";
import { contributorsData } from "@/component/constants/contributors2022";
import { FaGithub } from "react-icons/fa";

export const ContributorCard = () => {
    const contributorsList = contributorsData;

    return (
        <div>
            <h3 className="text-4xl lg:text-5xl w-3/4 mx-auto text-center font-bold text-blue-950 py-10 mt-8">Meet the C4GT 2022 Contributors</h3>
            <div className="flex w-4/5 mx-auto mt-8 justify-center flex-wrap">
                {
                    contributorsList.map((contributor, index) => (
                        <div className="flex flex-col items-center mx-3 mb-16 bg-slate-50 shadow-xl border border-gray-200 text-center rounded-lg p-6 transform lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:scale-105 transition ease-in duration-300" key={index}>
                            <img className="w-4/5 rounded-full mb-4" src={`./assets/contributors/${contributor.imageName}`} alt="" />
                            <span className="font-bold text-xl text-black">{contributor.name}</span>
                            <span className="font-medium text-black">{contributor.institute}</span>
                            <a
                                href={contributor.githubLink}
                                className="text-slate-100 bg-gray-800 flex items-center justify-center mt-4 py-2 px-4 rounded-full shadow transition duration-300 text-sm"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <FaGithub size={20} className="mr-2" />
                                Profile Details
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};