"use client";
import React from "react";
import { ProductList, Header } from '@/component/components';
import { productList } from '@/component/constants';
import Head from "next/head";

const C4GT23 = () => {
  
  return (
    <div>
      <Head>
         <title>Mentoring Program Projects | Code for GovTech</title>
      </Head>
      <div className={`c4gt23-container  bg-gray-100`}>
        <Header />
        <ProductList productList={productList} />
      </div>
    </div>
    
  );
};

export default C4GT23;
