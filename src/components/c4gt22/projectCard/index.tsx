import React from "react";
import { ProjectList } from "@/component/components/C4GT22/projectCard/projectList";
import { projectListData } from "@/component/constants/projects2022";

export const ProjectCard = () => {
    return (
        <div className="mb-20">
            <h3 className="w-5/6 mx-auto text-4xl lg:text-5xl text-center font-bold text-blue-950 py-10">Projects</h3>
            <ProjectList projectData={projectListData} />
        </div>
    );
};