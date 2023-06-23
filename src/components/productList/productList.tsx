import React, { useState } from 'react';
import ProductCard from '../productCard/productCard';
import SearchBar from '../searchBar/search';

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

  const handleSearch = (result: ProductListProps['productList']) => {
    setSearchResult(result);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-bold text-slate-800 mb-8 font-display">C4GT 2023 Projects</h1>
      <div className="">
        <SearchBar productList={productList} onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResult.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};
