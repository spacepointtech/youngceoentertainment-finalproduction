

// 'use client';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Image from 'next/image';
// import { FaPencilAlt, FaArrowUp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCheckCircle, FaSpotify, FaItunes, FaAmazon, FaFacebook, FaPlus } from 'react-icons/fa';
// // import { useSession } from "next-auth/react";
// import Header from '@/app/dashboard/components/Header';
// import { Icon } from "@iconify/react";
// import { useState, useRef, useEffect } from 'react';

// export default function Profile() {
//     // const { data: session } = useSession();
//     const [selectedSection, setSelectedSection] = useState("Music");
//     const sectionsRefs = useRef([]);
//     const [underlineStyle, setUnderlineStyle] = useState({});
//     const sections = ["Music", "Streamings", "Payout"];
//     useEffect(() => {
//         const selectedIndex = sections.indexOf(selectedSection);
//         if (sectionsRefs.current[selectedIndex]) {
//           const selectedElement = sectionsRefs.current[selectedIndex];
//           const elementRect = selectedElement.getBoundingClientRect();
//           const containerRect = selectedElement.parentElement.getBoundingClientRect();
    
//           // Calculate left offset relative to the parent container
//           const offsetLeft = elementRect.left - containerRect.left;
    
//           setUnderlineStyle({
//             width: elementRect.width,
//             transform: `translateX(${offsetLeft}px)`,
//           });
//         }
//     }, [selectedSection]);

//     return (
//         <div className='w-full h-[1115px] font-poppins bg-black'>
//             {/* Horizontal Line 89px from the top */}
       
//             <div className="w-[65.76px] h-[53.66px] top-4 ml-20 relative cursor-pointer">
//                 <Image
//                     className="object-cover"
//                     src="/navbarlogo.png"
//                     alt="Logo"
//                     fill
//                     priority
//                 />
//             </div>

//             <nav className="absolute left-44 top-8">
//                 <div className="flex items-center gap-12 sm:gap-12 overflow-x-auto font-poppins">
//                     {sections.map((section, index) => (
//                         <div
//                             key={section}
//                             ref={(el) => (sectionsRefs.current[index] = el)}
//                             onClick={() => setSelectedSection(section)}
//                             className={`text-sm sm:text-xl font-poppins font-normal leading-snug cursor-pointer transition-colors duration-300 ${
//                                 selectedSection === section ? 'text-[#e97f18]' : 'text-[#757575]'
//                             }`}
//                         >
//                             {section}
//                         </div>
//                     ))}
//                 </div>

//                 <div className="relative mt-2">
//                     <div
//                         className="absolute border-2 w-full border-[#e97f18] transition-all duration-300"
//                         style={{
//                             ...underlineStyle,
//                             height: '1px',
//                             bottom: '-2px',
//                             position: 'absolute',
//                         }}
//                     ></div>
//                 </div>
//             </nav>

//             <div className="absolute top-[89px] left-0 w-full border-t border-gray-600" />


//           {/* Main Form  */}
//           {selectedSection === "Music" && <div>
           
//             <div className='font-poppins px-20'>
//               <h1 className='text-white font-normal text-[32px] mt-20 mb-10'> Essential Details for Your Next Big Release</h1>

//               <label className="text-white text-xl font-medium "> Write Your Song Title Here! </label>
//               <input
//               id="songtitle"
//               type="name"
//               placeholder="Enter your Song title here"
//               className="bg-[#1A1A1A] mt-2 w-full h-[59px] placeholder:text-[#757575] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//               required
//             />
               
//                <div className='mt-5'> 
//               <label className="text-white text-xl font-medium "> Version (Optional) </label>
//               <input
//               id="version"
//               type="name"
//               placeholder="Enter your Version here"
//               className="bg-[#1A1A1A] mt-2 w-full h-[59px] placeholder:text-[#757575] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//               required
//             />
//             <p className='text-[#C7C7C7] font-light text-[12px] mt-2'>Specify how this release differs from the original (e.g., Remix, Radio Edit, Bonus Track)</p>
//             </div>
          
//             <div className="mt-5">
//   <div className="flex justify-between items-center">
//     <label className="text-white text-xl font-medium">Language of the Titles</label>
//     <label className="text-white text-xl font-medium">Release Type of your music</label>
//   </div>
//   <div className="flex justify-between gap-5 mt-2">
//     {/* Left Dropdown */}
//     <select
//       className="bg-[#1A1A1A] w-[48%] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//     >
//       <option value="" disabled>
//         Select Language
//       </option>
//       <option>English</option>
//       <option>Hindi</option>
//     </select>

//     {/* Right Dropdown */}
//     <div className="flex flex-col w-[48%]">
//       <select
//         className="bg-[#1A1A1A] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//       >
//         <option value="" disabled>
//           Choose an option
//         </option>
//         <option>Album</option>
//         <option>Single</option>
//         <option>EP</option>
//         <option>Compilation</option>
//       </select>
//       <p className="text-[#C7C7C7] text-left text-[12px] mt-2">
//         Choose your release type: Album, Single, EP, or Compilation
//       </p>
//     </div>
//   </div>
// </div>


//    <div className="border-t border-[#262626] mt-10"></div>



//     <h1 className='text-white text-[32px] mt-5 font-normal'> Genre & Credits Details</h1>
//     <div className="mt-5">
//   <div className="flex justify-between items-center">
//     <label className="text-white text-xl font-medium">Contributors Role</label>
//     <label className="text-white text-xl font-medium">Contributor Name</label>
//   </div>
//   <div className="flex justify-between gap-5 mt-2">
//     {/* Left Dropdown */}
//     <input
//               id="contributorsrole"
//               type="name"
//               placeholder="Enter your Contributor Role here"
//       className="bg-[#1A1A1A] w-[48%] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//    / >
      

//     {/* Right Dropdown */}
//      <input
//               id="contributorsrole"
//               type="name"
//               placeholder="Enter your Contributor Role here"
//       className="bg-[#1A1A1A] w-[42%] ml-4 h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//    / >
//      <button className="flex items-center justify-center w-10 h-10 border border-[#e97f18] rounded-xl">
//                 <FaPlus className="text-[#e97f18]" />
//               </button>
//   </div>
//   <p className='text-[#C7C7C7] text-left text-[12px] mt-2'> List all contributors and their roles, ensuring accuracy and consistency</p>
// </div>
//            </div>
        
//         <div className='justify-end items-end text-end px-20'>
//            <button
//            className='text-[#e97f18] mr-5 h-[52px] border border-[#e97f18] mt-20 rounded-lg w-[196px]'
//            > 
//         Cancel
//      </button>
       
//      <button
//            className='text-black bg-[#e97f18] h-[52px] border border-[#e97f18] mt-20 rounded-lg w-[196px]'
//            > 
//         Next
//      </button>
//      </div>

//           </div>}

          

    




//           {selectedSection === "Streamings" && <div>
           
//             <p className='text-[#e97f18] text-center mt-52'>  Streaming Section</p>

//          </div>}
         

//          {selectedSection === "Payout" && <div>
           
//             <p className='text-[#e97f18] text-center mt-52'>  Payout Section</p>
 
//            </div>}



//         </div>
//     );
// }





'use client';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Image from 'next/image';
import { FaPen, FaPlus } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

export default function Profile() {
    const [selectedSection, setSelectedSection] = useState("Music");
    const sectionsRefs = useRef([]);
    const [underlineStyle, setUnderlineStyle] = useState({});
    const sections = ["Music", "Streamings", "Payout"];
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const selectedIndex = sections.indexOf(selectedSection);
        if (sectionsRefs.current[selectedIndex]) {
            const selectedElement = sectionsRefs.current[selectedIndex];
            const elementRect = selectedElement.getBoundingClientRect();
            const containerRect = selectedElement.parentElement.getBoundingClientRect();
            const offsetLeft = elementRect.left - containerRect.left;
            setUnderlineStyle({
                width: elementRect.width,
                transform: `translateX(${offsetLeft}px)`,
            });
        }
    }, [selectedSection]);

    const handleNext = () => {
        if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const handleCancel = () => {
        // Handle cancel logic (e.g., reset form, navigate away, etc.)
        console.log("Form canceled");
    };

    return (
        <div className='w-full h-[1115px] font-poppins bg-black'>
            <div className="w-[65.76px] h-[53.66px] top-4 ml-20 relative cursor-pointer">
                <Image
                    className="object-cover"
                    src="/navbarlogo.png"
                    alt="Logo"
                    fill
                    priority
                />
            </div>

            <nav className="absolute left-44 top-8">
                <div className="flex items-center gap-12 sm:gap-12 overflow-x-auto font-poppins">
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
                        className="absolute border-2 w-full border-[#e97f18] transition-all duration-300"
                        style={{
                            ...underlineStyle,
                            height: '1px',
                            bottom: '-2px',
                            position: 'absolute',
                        }}
                    ></div>
                </div>
            </nav>

            <div className="absolute top-[89px] left-0 w-full border-t border-gray-600" />
           
            {selectedSection === "Music" && <div>
            <div className="font-poppins">
                {currentStep === 1 && (
                    <div>
                       <div className='font-poppins px-20'>
              <h1 className='text-white font-normal text-[32px] mt-20 mb-10'> Essential Details for Your Next Big Release</h1>

              <label className="text-white text-xl font-medium "> Write Your Song Title Here! </label>
              <input
              id="songtitle"
              type="name"
              placeholder="Enter your Song title here"
              className="bg-[#1A1A1A] mt-2 w-full h-[59px] placeholder:text-[#757575] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
            />
               
               <div className='mt-5'> 
              <label className="text-white text-xl font-medium "> Version (Optional) </label>
              <input
              id="version"
              type="name"
              placeholder="Enter your Version here"
              className="bg-[#1A1A1A] mt-2 w-full h-[59px] placeholder:text-[#757575] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
            />
            <p className='text-[#C7C7C7] font-light text-[12px] mt-2'>Specify how this release differs from the original (e.g., Remix, Radio Edit, Bonus Track)</p>
            </div>
          
            <div className="mt-5">
  <div className="flex justify-between items-center">
    <label className="text-white text-xl font-medium">Language of the Titles</label>
    <label className="text-white text-xl font-medium">Release Type of your music</label>
  </div>
  <div className="flex justify-between gap-5 mt-2">
    {/* Left Dropdown */}
    <select
      className="bg-[#1A1A1A] w-[48%] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
    >
      <option value="" disabled>
        Select Language
      </option>
      <option>English</option>
      <option>Hindi</option>
    </select>

    {/* Right Dropdown */}
    <div className="flex flex-col w-[48%]">
      <select
        className="bg-[#1A1A1A] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
      >
        <option value="" disabled>
          Choose an option
        </option>
        <option>Album</option>
        <option>Single</option>
        <option>EP</option>
        <option>Compilation</option>
      </select>
      <p className="text-[#C7C7C7] text-left text-[12px] mt-2">
        Choose your release type: Album, Single, EP, or Compilation
      </p>

    </div>
  </div>
</div>


   <div className="border-t border-[#262626] mt-10"></div>



    <h1 className='text-white text-[32px] mt-5 font-normal'> Genre & Credits Details</h1>
    <div className="mt-5">
  <div className="flex justify-between items-center">
    <label className="text-white text-xl font-medium">Contributors Role</label>
    <label className="text-white text-xl font-medium">Contributor Name</label>
  </div>
  <div className="flex justify-between gap-5 mt-2">
    {/* Left Dropdown */}
    <input
              id="contributorsrole"
              type="name"
              placeholder="Enter your Contributor Role here"
      className="bg-[#1A1A1A] w-[48%] placeholder:text-[#757575] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
   / >
      


     <input
              id="contributorsrole"
              type="name"
              placeholder="Enter your Contributor Role here"
      className="bg-[#1A1A1A] w-[42%] placeholder:text-[#757575] ml-4 h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
   / >
     <button className="flex items-center justify-center w-[56px] h-[58px] border border-[#e97f18] rounded-xl">
                <FaPlus className="text-[#e97f18]" />
              </button>
  </div>
  <p className='text-[#C7C7C7] text-left text-[12px] mt-2'> List all contributors and their roles, ensuring accuracy and consistency</p>
</div>
           </div>
                    </div>
                )}



                {currentStep === 2 && (
                    <div className='font-poppins px-20 mt-14'>
                  
                  <div className="flex justify-between items-center">
    <label className="text-white text-xl font-medium">Album</label>
   
  </div>
  <div className="flex justify-between gap-5 mt-2">
    {/* Left Dropdown */}
    <input
              id="trackname"
              type="name"
              placeholder="Track Name Will be Displayed Here"
      className="bg-[#1A1A1A] w-[95%] placeholder:text-[#757575] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
   / >
      
     <button className="flex items-center justify-center w-[56px] h-[58px] border border-[#e97f18] rounded-xl">
                <FaPen className="text-[#e97f18]" />
              </button>
  </div>
  <h1 className='text-[32px] font-normal text-white mb-10 mt-10'> Provide licensing details </h1>
  <div className="flex justify-between items-center">
   
    <label className="text-white text-xl font-medium">Digital Release Date</label>
    <label className="text-white text-xl font-medium">Release Time</label>
  </div>
  <div className="flex justify-between gap-5 mt-2">
    
    {/* Left Dropdown */}
    
    <input
        type="date"
        id="date"
       
        className="bg-[#1A1A1A] w-[48%] placeholder:[#757575] h-[59px] text-sm text-[#757575] px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
      />
       
    {/* Right Dropdown */}
    <div className="flex flex-col w-[48%]">
    <input
        type="time"
        id="time"
       
        className="bg-[#1A1A1A] w-full placeholder:[#757575] h-[59px] text-sm text-[#757575] px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
      />
     
      </div>
      </div>
         
      <div className="flex justify-between items-center mt-5">
   
   <label className="text-white text-xl font-medium">Time Zone of Reference</label>
   <label className="text-white text-xl font-medium">Original Release Date</label>
 </div>
 <div className="flex justify-between gap-5 mt-2">
   
   {/* Left Dropdown */}
   
   <select
        className="bg-[#1A1A1A] w-[48%] h-[59px] text-sm text-white px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
      >
        <option value="" disabled>
          Choose an option
        </option>
        <option>Local</option>
        <option>Single</option>
        <option>EP</option>
        <option>Compilation</option>
      </select>
      
   {/* Right Dropdown */}
   <div className="flex flex-col w-[48%]">
   <input
       type="date"
       id="date"
      
       className="bg-[#1A1A1A] w-full placeholder:[#757575] h-[59px] text-sm text-[#757575] px-3 py-2 rounded-md border border-[#262626] focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
     />
    
     </div>
     </div>           
                    
                    </div>
                )}
                {currentStep === 3 && (
                    <div>
                        
                        {/* Step 3 Content */}
                    </div>
                )}
                {currentStep === 4 && (
                    <div>
                       
                        {/* Step 4 Content */}
                    </div>
                )}
            </div>

            <div className={`px-20 ${currentStep === 4 ? 'flex justify-center mt-10' : 'flex justify-end mt-20'}`}>
                {currentStep === 1 && (
                    <button
                        className='text-[#e97f18] mr-5 h-[52px] border border-[#e97f18] rounded-lg w-[196px]'
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
                {currentStep > 1 && (
                    <button
                        className='text-[#e97f18] mr-5 h-[52px] border border-[#e97f18] rounded-lg w-[196px]'
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                )}
                {currentStep < 4 ? (
                    <button
                        className='text-black bg-[#e97f18] h-[52px] border border-[#e97f18] rounded-lg w-[196px]'
                        onClick={handleNext}
                    >
                        Next
                    </button>
                ) : (
                    <button
                        className='text-black bg-[#e97f18] h-[52px] border border-[#e97f18] rounded-lg w-[196px]'
                    >
                        Submit
                    </button>
                )}
            </div>
            </div>}

        </div>
    );
}
