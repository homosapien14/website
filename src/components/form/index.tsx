import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import FormHeader from "./formHeader";

export const Form: React.FC = () => {
  const [userData, setUserData] = useState({
    name: "",
    college: "",
    degree: "",
    email: "",
    phone: "",
    discord: "",
    github: "",
    openSourceExp: "No",
  });

  useEffect(() => {
    const savedDraft = localStorage.getItem("draftData");
    if (savedDraft) {
      const parsedDraft = JSON.parse(savedDraft);
      setUserData(parsedDraft);
    }
  }, []);

  const saveDraft = (event) => {
    event.preventDefault();
    const draftData = userData;
    localStorage.setItem("draftData", JSON.stringify(draftData));
    alert("Your Data is saved");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <FormHeader />
      <div className="container w-3/5 lg:w-2/3 z-30 mx-auto mt-6 lg:-mt-6 mb-16">
        <div className="lg:w-2/3 z-30 mx-auto bg-white p-6 lg:p-10 border rounded-lg relative bg-whiteshadow-lg drop-shadow-lg">
          <div className="flex md:justify-between md:items-center flex-col md:flex-row mb-6">
            <h1 className="text-sm text-slate-600 font-medium ">
              User Profile
            </h1>
            <div className="flex items-center">
              <button
                className="bg-rose-800 hover:bg-green-600 text-white py-2 px-4 rounded "
                onClick={handleSubmit}
              >
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
            value={userData.name}
            onChange={(e)=>setUserData({
              ...userData,
              name: e.target.value,
            })}
          />
          <InputField
            id="college"
            label="College/Organisation name*"
            type="text"
            value={userData.college}
            onChange={(e)=>setUserData({
              ...userData,
              college: e.target.value,
            })}
          />
          <InputField
            id="degree"
            label="Degree*"
            type="text"
            value={userData.degree}
            onChange={(e)=>setUserData({
              ...userData,
              degree: e.target.value,
            })}
          />
          <InputField
            id="email"
            label="Email*"
            type="email"
            value={userData.email}
            onChange={(e)=>setUserData({
              ...userData,
              email: e.target.value,
            })}
          />
          <InputField
            id="phone-number"
            label="Phone number*"
            type="tel"
            value={userData.phone}
            onChange={(e)=>setUserData({
              ...userData,
              phone: e.target.value,
            })}
          />
          <InputField
            id="discord-id"
            label="Discord ID (Optional)"
            type="text"
            value={userData.discord}
            onChange={(e)=>setUserData({
              ...userData,
              discord: e.target.value,
            })}
          />
          <InputField
            id="github-id"
            label="GitHub ID (Optional)"
            type="text"
            value={userData.github}
            onChange={(e)=>setUserData({
              ...userData,
              github: e.target.value,
            })}
          />
          <div className="mb-4">
            <label className="block font-regular mb-1">
              Experience in open-source
            </label>
            <select
              value={userData.openSourceExp}
              onChange={(e)=>setUserData({
                ...userData,
                openSourceExp: e.target.value,
              })}
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
            <button
              className="bg-rose-800 hover:bg-green-600 text-white py-2 px-4 rounded "
              onClick={handleSubmit}
            >
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
