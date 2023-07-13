import {
  SamagraLogo,
  dgpImage,
  githubFull,
  oniImage,
  projectPartners,
  unstopLogo,
} from "@/component/assets/images";
import Image from "next/image";

export const IconComponent = () => {
  return (
    <>
      <div className="flex mt-5 mx-2 flex-wrap justify-between">
        <div className="flex border rounded flex-col justify-center w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center my-4">
            Knowledge Partner
          </h3>
          <div className="w-28 h-28 flex self-center items-center justify-center">
            <Image src={dgpImage} alt="" />
            <Image src={oniImage} alt="" />
          </div>
        </div>
        <div className="flex border rounded flex-col justify-center w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center my-4">
            Community Partner
          </h3>
          <div className="w-28 h-28 flex  self-center items-center justify-center">
            <Image src={githubFull} alt="" />
          </div>
        </div>
        <div className="flex border rounded flex-col justify-center w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center my-4">
            Platform Partner
          </h3>
          <div className=" w-28 h-28 flex  self-center items-center justify-center">
            <Image src={unstopLogo} alt="" />
          </div>
        </div>
        <div className="flex border rounded flex-col justify-center w-1/2 md:w-1/4">
          <h3 className="text-color-primary font-bold text-center my-4">
            Organiser
          </h3>
          <div className="w-28 h-28 flex  self-center items-center justify-center">
            <Image src={SamagraLogo} alt="" />
          </div>
        </div>
      </div>
      <h3 className="text-color-primary font-bold text-center my-4">
        Project Partners
      </h3>
      <div className="flex flex-wrap mx-5 justify-center">
        {projectPartners.map((logo, index) => (
          <div
            key={index}
            className="mt-1 mr-4 w-28 h-28 flex items-center justify-center"
          >
            <Image src={logo} alt={`Partner Logo ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};
