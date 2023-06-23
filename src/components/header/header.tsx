import React from 'react';
import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={`${styles.container} mx-auto px-4 sm:px-6 lg:px-8`}>
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Projects</h1>
          <p className="text-lg text-slate-800 leading-relaxed mb-4">
            C4GT 2023 brings to you some key products being built in the Digital Public Goods ecosystem. This year we have
            numerous projects across products like DIGIT, CQube, Sunbird, UCI, and more!
          </p>
          <p className="text-base text-slate-800 leading-relaxed mb-4">
            To explore projects in detail, visit the
          </p>
          <a
            href="https://github.com/C4GT"
            className="text-white hover:text-gray-200 font-medium bg-blue-500 hover:bg-blue-800 py-2 px-4 rounded-lg shadow transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="w-full lg:w-1/2 mt-4">
          <img
            className="w-full h-2/4 object-cover"
            src="https://static.wixstatic.com/media/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png/v1/fill/w_1250,h_1544,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/060b0c_8029055ce0074bfaa4bb6d9f1c2c33d2~mv2.png"
            alt="Open Source Project Community"
          />
        </div>
      </div>
    </div>
  );
};
