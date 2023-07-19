import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import Header from "./header";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [discord, setDiscord] = useState("");
  const [github, setGithub] = useState("");
  const [openSourceExp, setOpenSourceExp] = useState("No");

  useEffect(() => {
    const savedDraft = localStorage.getItem("draftData");
    if (savedDraft) {
      const parsedDraft = JSON.parse(savedDraft);
      setName(parsedDraft.name);
      setName(parsedDraft.college);
      setName(parsedDraft.degree);
      setName(parsedDraft.email);
      setName(parsedDraft.phone);
      setName(parsedDraft.discord);
      setName(parsedDraft.github);
      setName(parsedDraft.openSourceExp);
    }
  }, []);

  const saveDraft = () => {
    const draftData = {
      name,
      college,
      degree,
      email,
      phone,
      discord,
      github,
      openSourceExp,
    };
    localStorage.setItem("draftData", JSON.stringify(draftData));
  };

  return (
    <>
      <Header />
      <div className="container w-3/5 lg:w-2/3 z-30 mx-auto mt-6 lg:-mt-6 mb-16">
        <div className="lg:w-2/3 z-30 mx-auto bg-white p-6 lg:p-10 border rounded-lg relative bg-whiteshadow-lg drop-shadow-lg">
          <div className="flex md:justify-between md:items-center flex-col md:flex-row mb-6">
            <h1 className="text-sm text-slate-600 font-medium ">
              User Profile
            </h1>
            <div className="flex items-center">
              <button className="bg-rose-800 hover:bg-green-600 text-white py-2 px-4 rounded ">
                Submit
              </button>
              <button
                className="ml-5 bg-rose-800 hover:bg-green-600 text-white py-2 px-3 md:py-2 md:px-4 rounded"
                onClick={saveDraft}
              >
                Save Draft
              </button>
            </div>
          </div>

          <hr className="mb-10 h-px w-full bg-black"></hr>

          <InputField
            id="name"
            label="Name*"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            id="college"
            label="College/Organisation name*"
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <InputField
            id="degree"
            label="Degree*"
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <InputField
            id="email"
            label="Email*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="phone-number"
            label="Phone number*"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            id="discord-id"
            label="Discord ID (Optional)"
            type="text"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
          />
          <InputField
            id="github-id"
            label="GitHub ID (Optional)"
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <div className="mb-4">
            <label className="block font-regular mb-1">
              Experience in open-source
            </label>
            <select
              value={openSourceExp}
              onChange={(e) => setOpenSourceExp(e.target.value)}
              className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="Yes" className="font-regular">
                Yes
              </option>
              <option value="No" className="font-regular">
                No
              </option>
            </select>
          </div>
          <div className="flex mt-6 items-center">
            <button className="bg-rose-800 hover:bg-green-600 text-white py-2 px-4 rounded ">
              Submit
            </button>
            <button
              className="ml-5 bg-rose-800 hover:bg-green-600 text-white py-2 px-3 md:py-2 md:px-4 rounded"
              onClick={saveDraft}
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
