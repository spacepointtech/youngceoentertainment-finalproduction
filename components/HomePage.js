'use client';
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link"; // Import Link component
import Cookies from 'js-cookie';

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false); 

   // Check for the cookie on component mount
   useEffect(() => {
    const cookie = Cookies.get('disclaimerAgreed'); // Check if the cookie exists

    // If cookie doesn't exist, show the disclaimer
    if (!cookie) {
      setShowDisclaimer(true);
    }
  }, []);

  // Use effect to hide the disclaimer automatically after 5 minutes (300,000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(false);
    }, 300000); // 300,000 ms = 5 minutes

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, [showDisclaimer]);

  const handleAgree = () => {
    Cookies.set('disclaimerAgreed', 'true', { expires: 30 }); // Set a cookie for 30 days
    setShowDisclaimer(false); // Hide the disclaimer
  };


  return (
    <div className="h-screen relative bg-black">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          className="object-cover object-center sm:object-top"
          src="/homepage.png"
          alt="Background"
          fill
          sizes="100vw"
          priority
        />
      </div>
 

      {/* Hero Section */}
      <div className="absolute top-6 mt-40 left-8 w-11/12 md:w-4/5 max-w-[1207px] p-6">
        <div className="text-left ml-10">
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
        <Link href="/signup">
        <div className="h-[62px] px-[84px] ml-10 hover:bg-[#A35911] py-4 mt-10 bg-[#e97f18] rounded-lg justify-center items-center gap-2.5 inline-flex hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-[120px] text-white text-xl font-semibold ">
            Get Started
          </div>
        </div>
        </Link>
      </div>
      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 mt-14 font-poppins ">
          <div className="bg-[#191919] p-8 rounded-lg text-left max-w-3xl w-full shadow-[0_0_20px_#e97f18] border border-[#e97f18]">
            <h2 className="text-3xl font-bold mb-6 text-[#e97f18] text-left ">Welcome to Young CEO Entertainment!</h2>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              By using our website and services, you agree to the following terms and conditions:
            </p>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              <strong className="text-white font-bold">Ownership of Content:</strong> All songs and musical content distributed through our service remain the property of their respective owners. Young CEO Entertainment does not claim any ownership rights over the content provided by users.
            </p>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              <strong className="text-white font-bold">Dispute Resolution: </strong> 
              Young Ceo Entertainment has no standing in any disputes arising from the use of third-party samples, vocals, beats, or other elements in the distributed content. Any disputes or legal issues must be resolved directly between the content owner and the third party. Young Ceo Entertainment will not be liable for any damages of any kind arising from the use of this website or from any information, content, materials, products, or services included on or otherwise made available to you through this website.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleAgree} // Handle agree button click
                className="mt-6 bg-[#e97f18] text-white font-poppins px-12 py-5 rounded-2xl text-lg"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
