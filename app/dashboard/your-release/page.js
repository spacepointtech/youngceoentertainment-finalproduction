

'use client';
import { useState, useRef, useEffect } from 'react';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';
import { FaFilter } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function RecenReleasePage() {
  const [selectedSection, setSelectedSection] = useState("Overview");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("7 Days");
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [progress, setProgress] = useState(20);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const sectionsRefs = useRef([]);

  const sections = ["Overview", "Smart Links"];
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
            
    

            
            {selectedSection === "Overview" && <div>
           
               <h1 className='text-white font-bold text-[32px]'> Your Releases</h1>
                 <p className='text-[#757575] font-normal text-xl mx-3 mt-5'> No Recent Releases</p>
                
                <div className='justify-left mt-10' >

                  <button className='text-[#e97f18] font-medium text-xl w-[196px] h-[52px] rounded-lg border border-[#e97f18]'> View All Releases </button>  

                   <button className='text-white bg-[#e97f18] ml-5 font-medium text-xl w-[196px] h-[52px] rounded-lg border border-[#e97f18]'> Add Release </button>    
               </div>

              </div>}
            {selectedSection === "Smart Links" && <div>
              
                           <div className="text-white text-2xl sm:text-4xl font-semibold font-['Poppins'] leading-tight">
                Smart Link Traffic               </div>

               <div className="w-full max-w-6xl h-auto sm:h-[198px] mt-6 bg-[#191919] rounded-[36px] shadow border border-[#e97f18] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
           
                 <Image
          src="/dashboard/coverart.jpg"
          alt="Song Cover art image "
          width='80'
          height='80'
          className="w-[100px] h-[100px] object-cover rounded-lg"
        />
                <div className="flex-1">
                  <div className="text-[#757575] text-xs sm:text-sm font-normal font-['Poppins'] leading-tight underline">
                    SMART LINK
                  </div>
                  <div className="text-[#ebebeb] text-sm sm:text-base font-semibold mt-2">
                    Track Name
                  </div>
                  <div className="text-[#A6A6A6] text-sm sm:text-base">
                    Link of the track
                  </div>
                  <div className="text-[#757575] text-xs font-normal mt-2">
                    Last updated Status by time
                  </div>
                </div>
                <div className="w-full sm:w-[163px] h-[80px] sm:h-[107px] rounded-2xl border border-dashed border-[#e97f18] flex flex-col items-center justify-center">
                  <div className="text-[#e97f18] text-xl sm:text-[28px] font-medium">(Count)</div>
                  <div className="text-[#e97f18] text-base sm:text-xl font-normal">Clicks</div>
                </div>
              </div>

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
