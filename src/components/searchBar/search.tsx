import React, { useState } from "react";
import { techStack } from "../../assets/constants";

interface SearchBarProps {
  productList: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
  }[];
  onSearch: (
    result: {
      title: string;
      description: string;
      projectCount: number;
      techStack: string[];
      githubLink: string;
    }[]
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ productList, onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);

  const handleSearch = () => {
    const filteredProducts = productList.filter((product) => {
      const { title, techStack, projectCount } = product;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        techStack.some((tech) =>
          tech.toLowerCase().includes(searchText.toLowerCase())
        ) ||
        projectCount.toString().includes(searchText)
      );
    });

    onSearch(filteredProducts);
  };

  const handleTechStackFilter = (tech: string) => {
    const isSelected = selectedTechStack.includes(tech);
    let updatedTechStack: string[];

    if (isSelected) {
      updatedTechStack = selectedTechStack.filter(
        (selectedTech) => selectedTech !== tech
      );
    } else {
      updatedTechStack = [...selectedTechStack, tech];
    }

    setSelectedTechStack(updatedTechStack);
    filterProducts(updatedTechStack);
  };

  const filterProducts = (techStack: string[]) => {
    const filteredProducts = productList.filter((product) => {
      return techStack.every((tech) => product.techStack.includes(tech));
    });

    onSearch(filteredProducts);
  };

  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row  md:justify-between mb-10">
      <div className="flex flex-wrap  w-full md:w-7/12">
        <button
          className={`w-auto px-3 py-1 mr-2 mt-2 text-sm rounded-lg ${
            selectedTechStack.length === 0
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => {
            setSelectedTechStack([]);
            filterProducts([]);
          }}
        >
          All
        </button>
        {techStack.map((tech) => (
          <button
            key={tech}
            className={`w-auto px-3 py-1 mt-2 mr-2 text-sm rounded-lg ${
              selectedTechStack.includes(tech)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleTechStackFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="flex flex-col space-y-2  md:space-y-0 md:flex-row md:space-x-1  md:items-center  w-full md:w-5/12">
        <input
          type="text"
          className="w-full  shadow-lg py-2.5 px-3  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by title, tech stack, or project count"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="w-full md:w-auto py-2.5 px-3  p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-2xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
