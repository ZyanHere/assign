"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#072A26] p-4 sm:p-6 flex items-center w-full px-4 sm:px-10 md:px-20 lg:px-40 xl:px-64">
      {/* Back Button */}
      <button onClick={() => router.back()} className="text-yellow-400 text-xl sm:text-2xl mr-3 sm:mr-4">
        &lt;
      </button>

      {/* Logo Image */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-yellow-400 ml-4 sm:ml-6">
        <Image
          src="/navbar.jpeg"
          alt="Logo"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      {/* Logo Text */}
      <h1 className="text-yellow-400 text-base sm:text-lg font-extrabold ml-2">J U D I X O</h1>
    </header>
  );
}
