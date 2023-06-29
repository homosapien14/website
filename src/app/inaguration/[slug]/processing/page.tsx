"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProgress } from "@component/api";

const Processing = () => {
  const params = useParams();
  const [length, setLength] = useState();
  useEffect(() => {
    const getProg = async () => {
      const res = await getProgress(params?.slug);
      // @ts-ignore
      setLength(() => res?.data?.length);
    };
    getProg();
  }, []);
  return (
    <div className="container min-h-screen flex items-center flex-col justify-center">
      <div className="flex justify-end">
        <img src="/C4GT.png" width={120} className="mt-3" />
      </div>
      <h1 className="text-[30px] mt-4 font-bold text-[#294294]">
        Code for GovTech (C4GT)
      </h1>
      <h2 className="mt-5 text-[20px] text-[#636467] text-center">
        Watch the portal to GovTech universe unlock!
      </h2>
      <h2 className="mt-3 text-[20px] text-[#636467] text-center">
        The event will launch only when all four powers of <b>wit</b>,{" "}
        <b>innovation</b>,<b> curiosity</b>, and a <b>touch of quirkiness</b>{" "}
        combine!
      </h2>
      {length == 1 && <img src="/Loader.svg" />}      
      <img src="/Loader.svg" />
    </div>
  );
};

export default Processing;
