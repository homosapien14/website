
import React from "react";
import Content from "./DPGcomponents/Content";
import Info from "./DPGcomponents/Info";
import {Metadata} from "next";

export const metadata : 
  Metadata = {
    title : "Digital Public Goods | Code for GovTech",
  }; 

const DigitalPublicGoods = () => {
  return (
    <div className="bg-white">
      <Info />
      <Content />
    </div>
  );
};

export default DigitalPublicGoods;
