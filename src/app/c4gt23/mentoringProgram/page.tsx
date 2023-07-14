import React from "react";
import { ProductList, Header } from "@/component/components";
import { productList } from "@/component/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentoring Program Projects | Code for GovTech",
};

const C4GT23 = () => {
  return (
    <div className={`c4gt23-container  bg-white`}>
      <Header />
      <ProductList productList={productList} />
    </div>
  );
};

export default C4GT23;
