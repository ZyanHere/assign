"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdditionForm() {
  const router = useRouter();
  const [additionalData, setAdditionalData] = useState({
    award: "",
    year: "",
    recognition: "",
    years: "",
    proBono: "",
  });


  useEffect(() => {
    const data = localStorage.getItem("additionalData");
    if (data) {
      setAdditionalData(JSON.parse(data));
    }
  }, []);



  const handleChange = (e) => {
    setAdditionalData({ ...additionalData, [e.target.name]: e.target.value });
  };
  console.log(additionalData);




  const handleSkip = (e) => {
    router.push("profile");
  };
  
  const handleNext = () => {
    console.log("handleNextCalling");
    if (!additionalData.award || !additionalData.year || !additionalData.recognition || !additionalData.years || !additionalData.proBono) {
      console.warn("Please fill in all fields before proceeding.");
      return;
    }
  
    localStorage.setItem("additionalData", JSON.stringify(additionalData));
    router.push("profile");
  };
  

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-lg w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
            Additional Information
          </h2>
          <p className="text-[20px] text-gray-500 text-center mb-4 mr-12 ml-12">
          Include any relevant details that strengthen your professional profile and credibility
          </p>

          <form className="space-y-4 ml-16 mr-16">
          <div className="flex">
              <div className="inline-block w-[400px]">
                <label className="block text-lg font-bold text-gray-600 ">
                    Award 
                </label>
                <input
                  type="text"
                  name="award"
                  value={additionalData.award}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                  placeholder="Award Name"
                  required
                />
              </div>

              <div className="inline-block w-[400px] ml-8">
                <label className="block text-lg font-bold text-gray-600">
                    Year
                </label>
                <input
                  type="text"
                  name="year"
                  value={additionalData.year}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100  text-gray-800"
                  placeholder="year"
                  required
                />
              </div>
            </div>

            <div className="flex">
              <div className="inline-block w-[400px]">
                <label className="block text-lg font-bold text-gray-600 ">
                    Recognition 
                </label>
                <input
                  type="text"
                  name="recognition"
                  value={additionalData.recognition}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                  placeholder="Recognition"
                  required
                />
              </div>

              <div className="inline-block w-[400px] ml-8">
                <label className="block text-lg font-bold text-gray-600">
                    Year
                </label>
                <input
                  type="text"
                  name="years"
                  value={additionalData.years}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100  text-gray-800"
                  placeholder="year"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
              Pro Bono Work
              </label>
              <input
                type="text"
                name="proBono"
                value={additionalData.proBono}
                onChange={handleChange}
                className="mt-1 p- w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="Summary of any voluntary legal services offered."
                required
              />
            </div>
            <div className="w-full text-black ">
                    <button>+ Add another recognition</button>
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
