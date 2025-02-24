"use client";
import CommonHeader from "@/app/components/CommonHeader";
import Header from "@/app/components/Header";
import StepNavigation from "@/app/components/StepNavigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  //localStorage.setItem("name", "zyandeep");

  // JSOn,stringify(formData)
  // localStorage.setItem('formData', JSON.stringify(formData));
  // LocalStoarge.getItem(')

  const handleSkip = (e) => {
    console.log("handleSkipCalling");
    router.push("personal");
  };
  const handleNext = () => {
    console.log("handleNextCalling");
    if (!formData.firstName && !formData.lastName && !formData.email && !formData.dob) {
      alert("Please fill in at least one field before proceeding.");
      return;
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    router.push("personal");
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-28 px-96 rounded-lg shadow-xl w-full max-w-[1400px] ">
          <CommonHeader />
          <StepNavigation />
          <h2 className="text-3xl font-semibold text-gray-700 text-center mt-8">
            Profile Details
          </h2>
          <p className="text-[20px] text-gray-500 text-center mb-4 mr-12 ml-12">
            Please use your real name as this will be required identity
            verification.
          </p>

          <form className="space-y-4 ml-16 mr-16">
            <div className="flex">
              <div className="inline-block w-[400px]">
                <label className="block text-lg font-bold text-gray-600 ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="inline-block w-[400px] ml-8">
                <label className="block text-lg font-bold text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100  text-gray-800"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:ring focus:ring-blue-300 bg-blue-100 text-gray-800"
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