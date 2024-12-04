'use client';
import Image from "next/image";
import Link from "next/link"; // Import Link component

export default function Home() {
  return (
    <div className="h-screen relative bg-black">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          className="object-cover"
          src="/homepage.png"
          alt="Background"
          fill
          priority
        />
      </div>
 

      {/* Hero Section */}
      <div className="absolute top-6 mt-32 left-8 w-11/12 md:w-4/5 max-w-[1207px] p-6 md:p-12">
        <div className="text-left">
          <h1 className="text-white text-[28px] md:text-[64px] font-bold font-Rubik leading-tight">
            Unlock Global Music
          </h1>
          <h1 className="text-white text-[28px] md:text-[64px] font-bold font-Rubik leading-tight">
            Distribution in Minutes!
          </h1>
          <p className="text-[#9f9fa1] md:text-[22px] font-normal leading-relaxed">
            Your Gateway to Seamless Music Distribution and Artist Growth.
          </p>
        </div>
        <div className="h-[62px] px-[74px] py-4 mt-10 bg-[#e97f18] rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="w-[120px] text-white text-xl font-semibold font-['Poppins']">
            <Link href="/signup"> Get Started </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
