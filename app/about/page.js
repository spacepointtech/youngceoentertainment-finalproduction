'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div
      className="bg-black font-poppins"
      style={{
        backgroundImage: "url('/images/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div >
        <h1 className="font-bold mt-16  text-center text-[40px] font-poppins">
          <span className="text-white text-bold">About</span> <span className="text-[#E97F18]">Us</span>
        </h1>

        <div className="text-center mt-10 text-white text-[32px] font-bold">
          ‘Of the Artists, By the Artists, For the Artists’
        </div>

        <div className="w-[1050px] mt-5 text-center">
          <span className="text-white text-xl font-bold leading-[30px]">Deepesh Vanjani</span>
          <span className="text-white text-xl font-normal leading-[30px']">
            , a dynamic 25-year-old Entrepreneur Rapper hailing from Nagpur, Maharashtra, is the visionary Founder and CEO of 
          </span>
          <span className="text-white text-xl font-bold  leading-[30px']">Young Ceo Entertainment.</span>
          <span className="text-white mt-5 text-xl font-normal  leading-[30px']">
           
           <div className='mt-5'> 
           Young Ceo Entertainment was founded in 2024 when he observed Artists are not getting paid transparently while distribution of royalties by existing music distribution services in India. Frustrated by the traditional approach where middlemen and major labels like T-Series dominated the scene, he envisioned an independent Music Distribution platform where artists could become their own CEO’s and distribute to major audio-streaming platforms like Spotify, Apple Music, JioSaavn, Gaana, Youtube Music etc. taking full control of their music and earnings.
           </div>
      
            
          </span>
        </div>

        {/* Adding Image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/sign.svg" // Replace with the actual path of your image
            alt="Deepesh Vanjani"
            width={267} // Replace with the desired width
            height={93} // Replace with the desired height
            className="rounded-full" // Add additional styles like rounded corners if needed
          />
        </div>

        <div className="text-center mt-5 text-white text-xl font-bold hover:scale-110 transition-transform duration-500 ease-in-out"> <Link href="https://www.linkedin.com/in/deepesh-vanjani-b3a46018a/">Deepesh Vanjani</Link> </div>
        <div className="text-center text-white text-xl font-light">Founder & CEO</div>
      </div>
    </div>
  );
}
