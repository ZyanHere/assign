"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EducationForm() {
  const router = useRouter();
  const [educationData, setEducationData] = useState({
    degree: "",
    roles: "",
  });


  useEffect(() => {
    const data = localStorage.getItem("educationData");
    if (data) {
      setEducationData(JSON.parse(data));
    }
  }, []);



  const handleChange = (e) => {
    setEducationData({ ...educationData, [e.target.name]: e.target.value });
  };
  console.log(educationData);




  const handleSkip = (e) => {
    router.push("skills");
  };
  const handleNext = () => {
    console.log("handleNextCalling");
  
    if (!educationData.degree || !educationData.roles) {
      console.warn("Please fill in all fields before proceeding.");
      return;
    }
  
    localStorage.setItem("educationData", JSON.stringify(educationData));
    router.push("skills");
  };
  

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-lg w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
            Educational Background
          </h2>
          <p className="text-[16px] text-gray-500 text-center mb-4 mr-12 ml-12">
          Provide your academic credentials as they play a vital role in
          establishing your legal expertise.
          </p>

          <form className="space-y-4 ml-16 mr-16">
            <div>
              <label className="block text-lg font-bold text-gray-600">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                value={educationData.degree}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="[Degree Name], [University/Institution] (Year of Graduation)"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                Certification
              </label>
              <input
                type="text"
                name="roles"
                value={educationData.roles}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="[Certification Name] – Issued by [Organization]."
                required
              />
            </div>
            <div className="w-full text-black ">
                    <button>+ Add another Degree</button>
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
