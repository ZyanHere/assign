"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WorkForm() {
  const router = useRouter();
  const [workData, setWorkData] = useState({
    year: "",
    roles: "",
    cases: "",
    current: false,
  });


  // const [check, setCheck] = useState(false);
  

  // useEffect(() => {
  //   const data = localStorage.getItem("workData");
  //   console.log("data",data);
  //   if (data) {
  //     setWorkData(JSON.parse(data));
  //   }
  // }, []);

  // console.log("workData",workData);



  // useEffect(() => {
  //   setWorkData({ ...workData, current: check});
  // },[check])
  // console.log(check)

  // const handleChange = (e) => {
  //   setWorkData({ ...workData, [e.target.name]: e.target.value });
  // };
  // console.log(workData);





  useEffect(() => {
    const data = localStorage.getItem("workData");
    if (data) {
      setWorkData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setWorkData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };





  const handleSkip = (e) => {
    router.push("education");
  };
  const handleNext = () => {
    console.log("handleNextCalling");
  
    if (!workData.year || !workData.roles || !workData.cases) {
      console.warn("Please fill in all fields before proceeding.");
      return;
    }
  
    localStorage.setItem("workData", JSON.stringify(workData));
    router.push("education");
  };
  

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-lg w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
             Work Experience
          </h2>
          <p className="text-[18px] text-gray-500 text-center mt-2 mb-4 mr-12 ml-12">
            Detail your professional experience accurately, as it will be crucial
        for case handling and client trust.
          </p>

          <form className="space-y-4 ml-16 mr-16">
            <div>
              <label className="block text-lg font-bold text-gray-600">
                   Total Years of Practice
              </label>
              <input
                type="text"
                name="year"
                value={workData.year}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="X Years"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                 Key Roles
              </label>
              <input
                type="text"
                name="roles"
                value={workData.roles}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="Legal Advisor, [Company Name] (Year–Year)"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-600">
                 Significant cases
              </label>
              <input
                type="text"
                name="cases"
                value={workData.cases}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="[Case Name/Type] – Brief description of role and outcome."
                required
              />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex ">
                    <input
                        type="checkbox"
                        name="current"
                        value={workData.current}
                        // onClick={() => setCheck((prev) => !prev)}
                        onChange={handleChange}
                        className="mr-2 w-5"
                    
                    />
                    <label className="block text-lg text-gray-600 whitespace-nowrap">
                        i’m currently working in this role
                    </label>
                </div>
                <div className="w-full text-black flex justify-end">
                    <button>+ Add another Degree</button>
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
