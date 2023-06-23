import React from 'react';

interface ProductProps {
  product: {
    title: string;
    description: string;
    projectCount: number;
    techStack: string[];
    githubLink: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-600 shadow-xl p-6 mb-4 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {product.title}
      </h2>
      <p className="text-slate-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {product.description}
      </p>
      <div className="flex flex-wrap mb-2">
        {product.techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 mr-2 mb-2 rounded-lg text-sm font-medium bg-blue-200 text-blue-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-slate-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Projects under this topic: {product.projectCount}
      </p>
      <a
        href={product.githubLink}
        className="text-slate-100 hover:text-gray-200 font-medium mt-4 inline-block bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg shadow transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProductCard;
