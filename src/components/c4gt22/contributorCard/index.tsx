import React, { ReactNode, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface ContributorCardProps {
    contributorsData: {
        name: string,
        imageName: string,
        projectName?: string,
        institute: string,
        githubLink: string,
    }[],
    children: ReactNode,
    edition: string
}

export const ContributorCard: React.FC<ContributorCardProps> = ({ contributorsData, edition, children }) => {
    const [contributorsList, setContributorsList] = useState(contributorsData.slice(0, 15));
    const [endPoint, setEndPoint] = useState(15);

    // function to load more contributor cards
    const handleClick = () => {
        let updatedEndPoint = endPoint + 10;
        let updatedContributorsList = contributorsData.slice(0, updatedEndPoint);
        setEndPoint(updatedEndPoint);
        setContributorsList(updatedContributorsList);

        if (updatedEndPoint > contributorsData.length) {
            updatedEndPoint = 0;
        }
    }

    return (
        <div>
            <h3 className="text-4xl lg:text-5xl w-3/4 mx-auto text-center font-bold text-blue-950 py-10 mt-8">{children}</h3>
            <div className="flex w-5/6 mx-auto mt-8 justify-center flex-wrap">
                {
                    contributorsList.map((contributor, index) => (
                        <div className="flex flex-col items-center justify-between mx-3 mb-16 bg-slate-50 shadow-xl border border-gray-200 text-center rounded-lg p-6 transform lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:scale-105 transition ease-in duration-300 w-full md:w-1/2 lg:w-1/4 xl:w-1/5 " key={index}>
                            <div className="flex flex-col items-center px-2">
                                <img className="rounded-full mb-4 w-48 h-48 object-cover" src={`./assets/${edition}/contributors/${contributor.imageName}`} alt="" />
                                <span className="font-bold text-xl text-black">{contributor.name}</span>
                                <span className="font-medium text-black">{contributor.projectName}</span>
                                <span className="font-medium text-black">{contributor.institute}</span>
                            </div>
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

            {
                endPoint <= contributorsData.length &&
                <button onClick={handleClick} className="text-slate-100 bg-gray-800 mx-auto py-2 px-4 rounded-md shadow text-md block">Load More</button>
            }
        </div>
    );
};