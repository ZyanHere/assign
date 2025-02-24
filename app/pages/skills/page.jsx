"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SkillsForm() {
  const router = useRouter();
  const [skillsData, setSkillsData] = useState({
    skills: "",
    language: "",
  });


  useEffect(() => {
    const data = localStorage.getItem("skillsData");
    if (data) {
      setSkillsData(JSON.parse(data));
    }
  }, []);



  const handleChange = (e) => {
    setSkillsData({ ...skillsData, [e.target.name]: e.target.value });
  };
  console.log(skillsData);




  const handleSkip = () => {
    router.push("additional");
  };
  const handleNext = () => {
    console.log("handleNextCalling");
  
    if (!skillsData.skills || !skillsData.language) {
      console.warn("Please fill in all fields before proceeding.");
      return;
    }
  
    localStorage.setItem("skillsData", JSON.stringify(skillsData));
    router.push("additional");
  };
  

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-lg w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
            Specializations & Skills
          </h2>
          <p className="text-[18px] text-gray-500 text-center mb-4 mr-12 ml-12">
            Highlight your key practice areas and skills to help clients find the
          right legal expertise.
          </p>

          <form className="space-y-4 ml-16 mr-16">
            <div>
              <label className="block text-lg font-bold text-gray-600">
              Key Specializations
              </label>
              <input
                type="text"
                name="skills"
                value={skillsData.skills}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="(e.g., Contract Negotiation, Arbitration, Litigation Strategy"
                required
              />
            </div>

            <div className="w-full text-black ">
                    <button>+ Add another skills</button>
             </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                Languages
              </label>
              <input
                type="text"
                name="language"
                value={skillsData.language}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="e,g, Assamese, Hindi, Bengali, English"
                required
              />
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
