"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  { name: "profile", path: "/profile" },
  { name: "personal", path: "/personal" },
  { name: "work", path: "/work" }, //key=2
  { name: "education", path: "/education" },
  { name: "skills", path: "/skills" },
  { name: "additional", path: "/additional" },
];

const StepNavigation = () => {
  const pathname = usePathname(); 
  console.log(pathname);
  const segment = pathname.split("/");
  const last = segment[segment.length - 1];

  let key = 0;
  for(let i = 0; i<steps.length; i++) {
    if(last === steps[i].name) {
      key = i;
      break;
    }
  }

  return (
    <div className="flex justify-center space-x-4 p-4">
      {steps.map((step, index) => (
        <Link 
          key={index} 
          href={step.path} 
          className={`px-4 py-2 rounded-md w-32
            ${index <= key ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
        
        </Link>
      ))}
    </div>
  );
};

export default StepNavigation;

