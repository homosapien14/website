"use client";
import { getCert } from "@component/api";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const C4gt23 = () => {
  const [url, setUrl] = useState();
  useEffect(() => {
    const getCertificate = async () => {
      const res = await getCert();
      console.log(res);
    };
    getCertificate();
  }, []);
  return (
    <div className="h-screen">
      <Confetti
        width={window?.innerWidth}
        height={window?.innerHeight}
        numberOfPieces={1000}
      />
      <iframe
        src="https://verify.codeforgovtech.in/inauguration/verify/did:C4GT:ad889eaf-3e7a-4203-9b34-25c5b81258a4"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default C4gt23;
