import React from "react";
import {
  HeaderCard,
  InfoBar,
  InfoCard,
  ProjectCard,
  ContributorCard,
  MentorCard,
} from "@/component/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "C4GT 2022 | Code for GovTech",
};
const C4GT22 = () => {
  return (
    <>
      <div className="c4gt22-container bg-white">
        <HeaderCard />
        <InfoBar />
        <InfoCard />
        <MentorCard />
        <ContributorCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default C4GT22;
