import { c4gt22Report } from "@/component/assets/images";
import Image from "next/image";

export const Hightlights = () => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-center mb-4 text-color-primary">
        Highlights from C4GT 2022
      </h1>
      <div className="flex mx-5 flex-col md:flex-row">
        <div className="text-center bg-primary-color p-5 sm:w-full md:w-1/3">
          <h3 className="font-bold text-white">Overview</h3>
          <p className="text-white font-regular mt-1 px-4 leading-relaxed">
            The first edition of C4GT was launched in May 2022, and it saw
            participation from 346 applicants out of which 13 were chosen. They
            successfully created 25+ features & wrote 100K lines of code across
            9 key projects.
          </p>
          <div className="flex w-1/2 mt-3 items-center text-center mx-auto bg-tertiary-color p-3  cursor-pointer hover:bg-green-700  rounded-lg">
            <a
              className="font-medium text-white no-underline"
              href="https://www.codeforgovtech.in/2022highlights"
              target="_blank"
            >
              Know More
            </a>
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
          </div>
        </div>
        <div className="bg-secondary-color text-center p-5 text-color-primary sm:w-full md:w-1/3">
          <h3 className="font-bold">C4GT Mentors</h3>
          <p className="font-regular">Here is what past mentors have to say.</p>
          <div>
            <iframe
              className="w-full h-48 md:h-64"
              src="https://www.youtube.com/embed/8Ji8WwIyn3Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <div className="bg-primary-color text-center p-5 text-white sm:w-full md:w-1/3">
          <h3 className="font-bold">Program Report</h3>
          <p className="font-regular">Check out C4GT 2022 highlights</p>
          <div className="ml-6">
            <a href="https://drive.google.com/file/d/1n2l_7Njd7_2VGCLrJixBjt7142J3t1q9/view?usp=share_link">
              <Image
                src={c4gt22Report}
                alt="c4gt22 report"
                width={250}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
