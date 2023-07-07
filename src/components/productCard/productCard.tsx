import { githubIcon } from "@/component/assets/images";
import Image from "next/image";
import React from "react";


interface ProductProps {
  product: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card bg-white rounded-lg border border-gray-600 shadow-xl p-6 mb-4 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="font-bold text-2xl font-bold text-slate-800 mb-2">
            {product.title}
          </h2>
          <p className="font-regular text-slate-600 mb-4">{product.description}</p>
          <div className="font-demi flex flex-wrap mb-2">
            {product.techStack.map((tech, index) => (
              <span
                key={index}
                className="tech-stack inline-block px-2 py-1 mr-2 mb-2 rounded-lg text-sm font-medium bg-blue-200 text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="font-regular text-slate-600">
            Projects under this topic: {product.projectCount}
          </p>
        </div>
        <div className="font-regular mt-auto">
          <a
            href={product.githubLink}
            className="w-3/4 sm:w-1/2 md:w-3/4  text-slate-100 hover:text-gray-200 flex items-center mt-4 inline-block bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg shadow transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Image className="mr-2" width={20} height={20} src={githubIcon} alt='github-icon'/>
            View on GitHub
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
