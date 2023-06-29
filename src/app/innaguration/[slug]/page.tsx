"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { verifyToken } from "@component/api";

const Innaguration = () => {
  const [name, setName] = useState();
  const params = useParams();
  const decodedToken = jwt_decode(params?.slug);
  useEffect(() => {
    // @ts-ignore
    setName(() => decodedToken?.id);
  }, []);

  const router = useRouter();
  const handleClick = async () => {
    const token = await verifyToken(params?.slug);
    console.log(token);
    router.push(`/innaguration/${params?.slug}/processing`);
  };
  return (
    name && (
      <div className="container flex justify-center items-center flex-col min-h-screen">
        <img src="/C4GT.png" width={400} />
        <h1 className="text-center text-[30px] mt-4 font-bold text-[#294294]">
          Welcome {name}
        </h1>
        <h2 className="text-center mt-2 text-[25px] text-[#294294]">
          Rahul Kulkarni claims Code for GovTech 2023 to be launched.
        </h2>
        <button
          className="mt-4 px-5 py-2 bg-[#f46827] text-white font-bold rounded"
          onClick={handleClick}
        >
          Click here to Launch C4GT
        </button>
      </div>
    )
  );
};

export default Innaguration;
