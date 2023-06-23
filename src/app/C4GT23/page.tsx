"use client";
import React from "react";
import { ProductList, Header } from "@component/components";
import { productList } from "../../assests/constant/constants";
import styles from "./C4GT23.module.css";

const C4GT23 = () => {
  return (
    <div className={`c4gt23-container  bg-gray-100${styles.container}`}>
      <Header />
      <ProductList productList={productList} />
    </div>
  );
};

export default C4GT23;
