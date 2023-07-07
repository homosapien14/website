import React, { useState } from "react";
import {ProductCard} from '@/component/components';
import {SearchBar} from '@/component/components' ;

interface ProductListProps {
  productList: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
  }[];
}

export const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  const [searchResult, setSearchResult] = useState(productList);

  const handleSearch = (result: ProductListProps["productList"]) => {
    setSearchResult(result);
  };

  return (
    <div className="container mt-14 mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-3xl text-center font-bold text-slate-800 mb-8 font-display">
        C4GT 2023 Projects
      </h1>
      <div className="">
        <SearchBar productList={productList} onSearch={handleSearch} />
      </div>

      {searchResult.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">No Projects found</p>
      ) : (
        <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResult.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
