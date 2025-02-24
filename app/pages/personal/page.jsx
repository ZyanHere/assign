"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PersonalForm() {
  const router = useRouter();
  const [personalData, setPersonalData] = useState({
    area: "",
    name: "",
    id: "",
    year: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("personalData");
    if (data) {
      setPersonalData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };
  console.log(personalData);


  const handleSkip = (e) => {
    router.push("work");
  };
  const handleNext = () => {
    console.log("handleNextCalling");
  
    if (!personalData.area || !personalData.name || !personalData.id || !personalData.year) {
      console.warn("Please fill in all fields before proceeding.");
      return;
    }
  
    localStorage.setItem("personalData", JSON.stringify(personalData));
    router.push("work");
  };
  

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-lg w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
            Professional Details
          </h2>
          <p className="text-[20px] text-gray-500 text-center mb-4 mr-12 ml-12">
            Fill out your profile for client to better understand your service
          </p>

          <form className="space-y-4 ml-16 mr-16">
            <div>
              <label className="block text-lg font-bold text-gray-600">
                Practise Area(s)
              </label>
              <input
                type="text"
                name="area"
                value={personalData.area}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="(e.g., Corporate Law, Family Law, Intellectual Property)"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                 Bar Membership
              </label>
              <input
                type="text"
                name="name"
                value={personalData.name}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="Bar Association Name"
                required
              />
            </div>
            <div className="flex">
              <div className="inline-block w-[400px]">
                
                <input
                  type="text"
                  name="id"
                  value={personalData.id}
                  onChange={handleChange}
                  className="mt-1 p-4 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                  placeholder="Membership ID/Registration Number"
                  required
                />
              </div>

              <div className="inline-block w-[400px] ml-8">
                
                <input
                  type="text"
                  name="year"
                  value={personalData.year}
                  onChange={handleChange}
                  className="mt-1 p-4 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100  text-gray-800"
                  placeholder="Year of Admission"
                  required
                />
              </div>
            </div>
          </form>
          <div className="flex justify-between mt-10">
            <button
              onClick={() => {
                handleSkip();
              }}
              type="button"
              className="px-5 py-2 bg-gray-300 font-semibold text-gray-700 rounded-md hover:bg-gray-400"
            >
              Skip
            </button>
            <button
              onClick={() => handleNext()}
              type="button"
              className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
