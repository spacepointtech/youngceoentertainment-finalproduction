

'use client';
import { useState, useRef, useEffect } from 'react';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';
import { FaFilter, FaWallet } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function RecenReleasePage() {
  const [selectedSection, setSelectedSection] = useState("Payouts");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(20);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const sectionsRefs = useRef([]);

  const sections = ["Payouts", "Analytics"];
  const timeFilters = ["7 Days", "25 Days", "12 Months", "Filters"];

  useEffect(() => {
    const selectedIndex = sections.indexOf(selectedSection);
    if (sectionsRefs.current[selectedIndex]) {
      const selectedElement = sectionsRefs.current[selectedIndex];
      const elementRect = selectedElement.getBoundingClientRect();
      const containerRect = selectedElement.parentElement.getBoundingClientRect();

      // Calculate left offset relative to the parent container
      const offsetLeft = elementRect.left - containerRect.left;

      setUnderlineStyle({
        width: elementRect.width,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  }, [selectedSection]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#0F0F0F] font-poppins">
      <button
        className="lg:hidden text-white p-4"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar progress={progress} />
      </div>
      <main className="flex-1 p-4 sm:p-6 flex flex-col gap-6 text-white">
        <Header />

        <div className="mx-5 lg:mx-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-white text-2xl sm:text-4xl font-semibold font-poppins leading-tight">
            Your Release
            </div>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {timeFilters.map((label) => (
                <div
                  key={label}
                  onClick={() => setSelectedTimeFilter(label)}
                  className={`w-auto px-5 py-2 rounded-xl flex items-center justify-center font-poppins transition duration-300 cursor-pointer ${
                    label === "Filters"
                      ? selectedTimeFilter === label
                        ? 'bg-white text-[#e97f18] border border-[#e97f18]'
                        : 'bg-white text-black hover:bg-[#e97f18] hover:text-white hover:border-none'
                      : selectedTimeFilter === label
                      ? 'bg-[#e97f18] text-white'
                      : 'bg-[#757575] hover:bg-[#e97f18] text-black'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-normal font-['Poppins'] leading-[18.80px]">
                    {label}
                  </span>
                  {label === "Filters" && (
                    <FaFilter className="ml-2 text-sm sm:text-base" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-10 mt-6 overflow-x-auto font-poppins">
            {sections.map((section, index) => (
              <div
                key={section}
                ref={(el) => (sectionsRefs.current[index] = el)}
                onClick={() => setSelectedSection(section)}
                className={`text-sm sm:text-xl font-poppins font-normal leading-snug cursor-pointer transition-colors duration-300 ${
                  selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
                }`}
              >
                {section}
              </div>
            ))}
          </div>

          <div className="relative mt-2">
            <div
              className="absolute border-2 border-[#e97f18] transition-all duration-300"
              style={{
                ...underlineStyle,
                height: '2px',
                bottom: '-2px',
                position: 'absolute',
              }}
            ></div>
            <div className="absolute w-full border-t border-neutral-800 top-[2px]"></div>
          </div>

        

          {/* Section Content */}
          <div className="mt-10">
            
    

            
            {selectedSection === "Payouts" && <div>
           
                <h1 className='text-white font-bold text-[32px] flex items-center justify-between'>
  Artists Name will be displayed Here
  <FaWallet size={52} className=' mr-24' />
</h1>

              
               <div className="w-[939px] h-[284px] mt-5 relative bg-gradient-to-b from-[#e97f18] to-[#83470d] rounded-3xl border border-[#a6a6a6] overflow-hidden">
  <div className='px-10 py-5 mt-5'>
    <h1 className='font-bold text-2xl'> Withdraw Your Royalties</h1>
    <span className='font-medium text-sm'>
      To ensure secure transactions, please confirm your identity before withdrawing your royalties. Once verified, you can seamlessly transfer your earnings to your preferred account.
    </span>

    <div className='text-white flex items-center justify-between mt-10'>
      <div>
        <p className='text-xl'>Available Balance</p>
        <p className='text-[40px] font-bold'>--Balance Display---</p>
      </div>
      <button className='bg-white w-[220px] h-[62px] rounded-lg text-black font-semibold text-xl'>
        Withdraw
      </button>
    </div>
  </div>
</div>

<div className="w-[936px] mt-10 h-[182px] relative bg-black rounded-3xl border border-[#a6a6a6]  overflow-hidden">
    <div className="left-[50px] top-[50px] absolute text-white text-2xl font-semibold font-['Poppins']">Get Premium</div>
    <div className="w-[481px] left-[50px] top-[94px] absolute text-[#a6a6a6] text-base font-medium font-['Poppins']">Customize Your Releases with Advanced Features</div>
    <div className="px-10 py-4 left-[669px] top-[56px] absolute rounded-lg border border-[#ebebeb] justify-center items-center gap-2.5 inline-flex overflow-hidden">
        <div className="text-white text-xl font-medium font-['Poppins']">Upgrade Now</div>
    </div>
</div>

              </div>}
            {selectedSection === "Analytics" && <div>
              
                      

              </div>}

            {/* {selectedSection === "Location" && <div>
              
              <p className='text-orange-500 font-poppins text-center text-2xl mt-20'> Your Location Will be Displayed Here! </p>
              
              </div>} */}
          </div>
        </div>
      </main>
    </div>
  );
}
