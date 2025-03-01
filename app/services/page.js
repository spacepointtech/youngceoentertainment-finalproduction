// import Image from 'next/image'
// import Link from 'next/link'
// import { FaAmazon, FaItunes, FaPhone, FaSearchLocation, FaSpotify, FaWhatsapp, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
// import { FiMail } from 'react-icons/fi'
// import { Icon } from "@iconify/react";

// export default function ServicesPage() {
//   return (
//     <div className="bg-black w-[1440px] h-[3304px] text-white font-poppins">
//       <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
//         <div className="container mx-auto text-left pt-24 pb-16">
//           <h1 className="text-4xl font-semibold mb-2 mt-16 text-left ml-6"> Our <span className='text-[#e97f18]'> Services </span> </h1>
//           <p className='ml-6'> At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms
//             (Spotify, Apple Music and 120+ more).
//              </p>
         
//         </div>
//       </div>

//    <div className="w-[1440px] h-[304px] pl-24 pr-[97px] pt-[285px] pb-[533.60px] bg-black flex-col justify-start items-start gap-[168px] inline-flex mt-20">
//     <div className="h-[1952.40px] flex-col justify-center items-start gap-20 inline-flex">
//         <div className="self-stretch h-[338px] justify-start items-start gap-[104px] inline-flex">
//             <div className="w-[526px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[60px] tracking-tight">Global</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Music Distribution</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="w-[338.67px] justify-start items-start inline-flex">
 
//                 </div>
//                 <span className="inline-flex text-[#e97f18]">   <Icon icon="line-md:spotify" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="arcticons:amazon-music" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="line-md:youtube" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="simple-icons:applemusic" className='w-[35px] h-[35px] mr-4'/>
//                      <span className="text-2xl text-nowrap w-[41px] h-[41px] "> +120 </span>
//                      </span>
//             </div>
//             <Image
//               src="/images/globe.png"
//               alt="globe"
//               width={599}
//               height={338}
//               className=" w-[599px] h-[338px]"
//             />

//         </div>
//         <div className="self-stretch h-[575px] justify-start items-start gap-[100px] inline-flex">
//         <Image
//               src="/images/artistsdashboard.png"
//               alt="Artist Dashboard"
//               width={820}
//               height={575}
//               className="rounded-lg w-[599px] h-[575px]"
//             />
//             <div className="w-[548px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="h-[458px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Artist </span><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Dashboard</span></div>
//                     <div className="self-stretch text-white text-xl font-normal  leading-[30px] tracking-tight">Our artist dashboard is all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms. It provides real-time insights into listener demographics, geographical data, and streaming performance, helping artists understand their audience and make informed decisions. The dashboard also offers transparent revenue and royalty tracking, ensuring artists can monitor their earnings efficiently.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
//                 <ul className="text-[12px] inline-flex list-inside list-disc font-normal text-[#e97f18]">
//                       <li className="text-[#e97f18] mr-4"> Smart Link </li>
//                       <li className="text-[#e97f18]  mr-4 "> Pre-save Link </li>
//                       <li className="text-[#e97f18] mr-4  "> Performance analytics </li>
//                       <li className="text-[#e97f18] mr-4 ">  Premium Features </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="self-stretch justify-start items-start gap-[50px] inline-flex">
//             <div className="w-[572px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Revenue</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Tracking</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
                   
//                     <ul className="text-[12px] inline-flex list-inside list-disc font-normal text-[#e97f18]">
//                       <li className="text-[#e97f18] mr-8">Real Time Insights </li>
//                       <li className="text-[#e97f18] mr-8"> Active Audience </li>
//                       <li className="text-[#e97f18] mr-8"> Geographical data </li>
//                       <li className="text-[#e97f18]"> Many More </li>
//                     </ul>
//                 </div>
//             </div>
//             <Image
//               src="/images/revenue.png"
//               alt="Revenue Tracking"
//               width={599}
//               height={457}
//               className="rounded-lg w-[599px] h-[457px]"
//             />
//         </div>

//         <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
//           <div className=" w-[599px] h-[500px]">
//           <Image
//               src="/images/supportive.png"
//               alt="24 X 7"
//               width={599}
//               height={500}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="md:w-1/2 ">
//             <h2 className="text-3xl font-semibold ml-20">24/7 Artist <span className="text-[#e97f18]"> Support </span> </h2>
//             <p className="mt-4 text-lg text-justify w-[550px] ml-20">
//               Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
//             </p>
//             <span className="inline-flex text-[#e97f18] mt-5 ml-20">   <Icon icon="duo-icons:location" className='w-[39.5px] h-[39.5px] mr-4'/>
//             <Link href="https://wa.me/8788969278" target="_blank"> <Icon icon="ic:baseline-whatsapp" className='w-[39.5px] h-[39.5px] mr-4'/> </Link>
//             <Icon icon="material-symbols:mail-outline" className='w-[39.5px] h-[39.5px] mr-4'/>
//             <Icon icon="material-symbols:call-outline" className='w-[39.5px] h-[39.5px] mr-4'/>
                    
//                      </span>
//           </div>
          
//         </div>
//               {/* Track Success Box */}
//         <div className="w-[1230px] h-[345px] self-stretch px-11 py-2.5 bg-[#0b0b0d] rounded-2xl border border-[#757575] flex-col justify-start items-start gap-2.5 inline-flex">
//   <div className="w-[1157px] px-[15px] justify-between items-center inline-flex">
//     <div className="w-[630px] flex-col justify-start items-start gap-5 inline-flex">
//       <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
//         <div className="self-stretch">
//           <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">Track Your</span>
//           <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Success </span>
//           <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">in</span>
//           <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Real-Time!</span>
//         </div>
//         <div className="w-[499px] text-[#e0e0e0] text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
//           Gain insights into your streams and earnings effortlessly and Join us and take control of your music career!
//         </div>
//       </div>
//       <Link href="/signup">
//       <div className="w-[269px] justify-start items-start gap-[41.20px] inline-flex">
//         <div className="grow shrink basis-0 h-[62px] px-[74px] w-[94px] text-[#e97f18] text-xl font-semibold py-4 rounded-lg border border-[#e97f18] justify-center items-center gap-2.5 flex hover:bg-[#e97f18] hover:text-white">
//             Join Now  
//         </div>
//       </div>
//       </Link>
//     </div>
//     <div className="w-[480px] h-[340px] mr-20">
//       <Image
//         src="/images/features.svg"
//         alt="Track Success"
//         width={490}
//         height={340}
//         className="rounded-lg"
//       />
//     </div>
//   </div>
//     </div>
        

// </div>

          
//         </div>
//     </div>


//   )
// }

// 'use client';
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaAmazon, FaItunes, FaPhone, FaSearchLocation, FaSpotify, FaWhatsapp, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
// import { FiMail } from 'react-icons/fi'
// import { Icon } from "@iconify/react";
// import { useState } from 'react';

// export default function ServicesPage() {
//   const [isPopupOpen, setPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setPopupOpen(!isPopupOpen);
//   };

//   const handleSubscribe = () => {

//     window.location.href =
//       "mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music.";
//   };
//   return (
    
//     <div className="bg-black w-[1440px] h-[3304px] text-white font-poppins">
//        {/* Popup Overlay */}
//        {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative w-[600px] h-[400px] bg-white rounded-lg shadow-lg">
//             <button
//               className="absolute top-2 right-2 text-black font-bold text-xl"
//               onClick={togglePopup}
//             >
//               &times;
//             </button>
//             <Image
//               src="/images/platforms.png"
//               alt="Platforms"
//               width={600}
//               height={400}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       )}


//       <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
//         <div className="container mx-auto text-left pt-24 pb-16">
//           <h1 className="text-4xl font-semibold mb-2 mt-16 text-left ml-6"> Our <span className='text-[#e97f18]'> Services </span> </h1>
//           <p className='ml-6'> At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms
//             (Spotify, Apple Music and 120+ more).
//              </p>
         
//         </div>
//       </div>

//    <div className="w-[1440px] h-[304px] pl-24 pr-[97px] pt-[285px] pb-[533.60px] bg-black flex-col justify-start items-start gap-[168px] inline-flex mt-20">
//     <div className="h-[1952.40px] flex-col justify-center items-start gap-20 inline-flex">
//         <div className="self-stretch h-[338px] justify-start items-start gap-[104px] inline-flex">
//             <div className="w-[526px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[60px] tracking-tight">Global</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Music Distribution</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="w-[338.67px] justify-start items-start inline-flex">
 
//                 </div>
//                 <span className="inline-flex text-[#e97f18]">   <Icon icon="line-md:spotify" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="arcticons:amazon-music" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="line-md:youtube" className='w-[41px] h-[41px] mr-4'/>
//                 <Icon icon="simple-icons:applemusic" className='w-[35px] h-[35px] mr-4'/>
//                 <span className="text-2xl text-nowrap w-[41px] h-[41px] cursor-pointer" onClick={togglePopup}>
//                   +120
//                 </span>
//                      </span>
//             </div>
//             <Image
//               src="/images/globe.png"
//               alt="globe"
//               width={599}
//               height={338}
//               className=" w-[599px] h-[338px]"
//             />

//         </div>
//         <div className="self-stretch h-[575px] justify-start items-start gap-[100px] inline-flex">
//         <Image
//               src="/images/artistsdashboard.png"
//               alt="Artist Dashboard"
//               width={820}
//               height={575}
//               className="rounded-lg w-[599px] h-[575px]"
//             />
//             <div className="w-[548px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="h-[458px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Artist </span><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Dashboard</span></div>
//                     <div className="self-stretch text-white text-xl font-normal  leading-[30px] tracking-tight">Our artist dashboard is all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms. It provides real-time insights into listener demographics, geographical data, and streaming performance, helping artists understand their audience and make informed decisions. The dashboard also offers transparent revenue and royalty tracking, ensuring artists can monitor their earnings efficiently.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
//                 <ul className="text-[12px] inline-flex list-inside list-disc font-normal text-[#e97f18]">
//                       <li className="text-[#e97f18] mr-4"> Smart Link </li>
//                       <li className="text-[#e97f18]  mr-4 "> Pre-save Link </li>
//                       <li className="text-[#e97f18] mr-4  "> Performance analytics </li>
//                       <li className="text-[#e97f18] mr-4 ">  Premium Features </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="self-stretch justify-start items-start gap-[50px] inline-flex">
//             <div className="w-[572px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Revenue</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Tracking</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
                   
//                     <ul className="text-[12px] inline-flex list-inside list-disc font-normal text-[#e97f18]">
//                       <li className="text-[#e97f18] mr-8">Real Time Insights </li>
//                       <li className="text-[#e97f18] mr-8"> Active Audience </li>
//                       <li className="text-[#e97f18] mr-8"> Geographical data </li>
//                       <li className="text-[#e97f18]"> Many More </li>
//                     </ul>
//                 </div>
//             </div>
//             <Image
//               src="/images/revenue.png"
//               alt="Revenue Tracking"
//               width={599}
//               height={457}
//               className="rounded-lg w-[599px] h-[457px]"
//             />
//         </div>

//         <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
//           <div className=" w-[599px] h-[500px]">
//           <Image
//               src="/images/supportive.png"
//               alt="24 X 7"
//               width={599}
//               height={500}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="md:w-1/2 ">
//             <h2 className="text-3xl font-semibold ml-20">24/7 Artist <span className="text-[#e97f18]"> Support </span> </h2>
//             <p className="mt-4 text-lg text-justify w-[550px] ml-20">
//               Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
//             </p>
//               <span className="inline-flex text-[#e97f18] mt-5 ml-20">  <Link href="https://g.co/kgs/TV1BF5E" target="_blank">   <Icon icon="duo-icons:location" className='w-[39.5px] h-[39.5px] mr-4'/> </Link> 
//             <Link href="https://wa.me/8788969278" target="_blank"> <Icon icon="ic:baseline-whatsapp" className='w-[39.5px] h-[39.5px] mr-4'/> </Link>
//           <button  onClick={handleSubscribe} >  <Icon icon="material-symbols:mail-outline" className='w-[39.5px] h-[39.5px] mr-4' /> </button> 
//           <Link href="tel:+918788969278">  <Icon icon="material-symbols:call-outline" className='w-[39.5px] h-[39.5px] mr-4'/> </Link> 
                    
//                      </span>
//           </div>
          
//         </div>
//               {/* Track Success Box */}
//         <div className="w-[1230px] h-[345px] self-stretch px-11 py-2.5 bg-[#0b0b0d] rounded-2xl border border-[#757575] flex-col justify-start items-start gap-2.5 inline-flex">
//   <div className="w-[1157px] px-[15px] justify-between items-center inline-flex">
//     <div className="w-[630px] flex-col justify-start items-start gap-5 inline-flex">
//       <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
//         <div className="self-stretch">
//           <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">Track Your</span>
//           <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Success </span>
//           <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">in</span>
//           <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Real-Time!</span>
//         </div>
//         <div className="w-[499px] text-[#e0e0e0] text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
//           Gain insights into your streams and earnings effortlessly and Join us and take control of your music career!
//         </div>
//       </div>
//       <Link href="/signup">
//       <div className="w-[269px] justify-start items-start gap-[41.20px] inline-flex">
//         <div className="grow shrink basis-0 h-[62px] px-[74px] w-[94px] text-[#e97f18] text-xl font-semibold py-4 rounded-lg border border-[#e97f18] justify-center items-center gap-2.5 flex hover:bg-[#e97f18] hover:text-white">
//             Join Now  
//         </div>
//       </div>
//       </Link>
//     </div>
//     <div className="w-[480px] h-[340px] mr-20">
//       <Image
//         src="/images/features.svg"
//         alt="Track Success"
//         width={490}
//         height={340}
//         className="rounded-lg"
//       />
//     </div>
//   </div>
//     </div>
        

// </div>

          
//         </div>
//     </div>


//   )
// }


'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from "@iconify/react";
import { useState } from 'react';

export default function ServicesPage() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleSubscribe = () => {
    window.location.href =
      "mailto:connectwithus@youngceoentertainment.com?subject=Get%20Details%20about%20distributing%20my%20track&body=Hello!%20I%20hope%20this%20email%20finds%20you%20well.%20I%20want%20to%20connect%20with%20the%20team%20to%20discuss%20about%20distributing%20my%20music.";
  };

  return (
    <div className="bg-black w-full min-h-screen text-white font-poppins">
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl"
              onClick={togglePopup}
            >
              &times;
            </button>
            <Image
              src="/images/platforms.png"
              alt="Platforms"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
              layout="responsive"
            />
          </div>
        </div>
      )}

      <div className="hero-section relative h-64 md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
        <div className="container mx-auto text-left pt-12 md:pt-24 pb-8 md:pb-16 px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 mt-8 md:mt-16"> 
            Our <span className='text-[#e97f18]'> Services </span> 
          </h1>
          <p className="text-[12px] md:text-base max-w-full">
            At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms (Spotify, Apple Music and 120+ more).
          </p>
        </div>
      </div>

      <div className="w-full px-4 md:px-24 py-12 md:py-24 bg-black">
        <div className="flex flex-col gap-12 md:gap-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="text-[#e97f18]">Global</span> Music Distribution
              </h2>
              <p className="text-base md:text-xl">
                We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.
              </p>
              <div className="flex flex-wrap gap-4 text-[#e97f18]">
                <Icon icon="line-md:spotify" className="w-8 h-8 md:w-10 md:h-10"/>
                <Icon icon="arcticons:amazon-music" className="w-8 h-8 md:w-10 md:h-10"/>
                <Icon icon="line-md:youtube" className="w-8 h-8 md:w-10 md:h-10"/>
                <Icon icon="simple-icons:applemusic" className="w-8 h-8 md:w-10 md:h-10"/>
                <button 
                  onClick={togglePopup}
                  className="text-lg md:text-xl text-nowrap cursor-pointer"
                >
                  +120
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/globe.png"
                alt="globe"
                width={599}
                height={338}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                Artist <span className="text-[#e97f18]">Dashboard</span>
              </h2>
              <p className="text-base md:text-xl">
                Our artist dashboard is an all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms.
              </p>
              <ul className="flex flex-wrap list-inside gap-4 text-sm md:text-base text-[#e97f18]">
                <li className="list-disc">Smart Link</li>
                <li className="list-disc">Pre-save Link</li>
                <li className="list-disc">Performance analytics</li>
                <li className="list-disc">Premium Features</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/artistsdashboard.png"
                alt="Artist Dashboard"
                width={820}
                height={575}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="text-[#e97f18]">Revenue</span> Tracking
              </h2>
              <p className="text-base md:text-xl">
                We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.
              </p>
              <ul className="flex flex-wrap gap-4 list-inside text-sm md:text-base text-[#e97f18]">
                <li className="list-disc">Real Time Insights</li>
                <li className="list-disc">Active Audience</li>
                <li className="list-disc">Geographical data</li>
                <li className="list-disc">Many More</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/revenue.png"
                alt="Revenue Tracking"
                width={599}
                height={457}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/supportive.png"
                alt="24 X 7"
                width={599}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                24/7 Artist <span className="text-[#e97f18]">Support</span>
              </h2>
              <p className="text-base md:text-lg">
                Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
              </p>
              <div className="flex flex-wrap gap-4 text-[#e97f18]">
                <Link href="https://g.co/kgs/TV1BF5E" target="_blank">
                  <Icon icon="duo-icons:location" className="w-8 h-8 md:w-10 md:h-10"/>
                </Link>
                <Link href="https://wa.me/8788969278" target="_blank">
                  <Icon icon="ic:baseline-whatsapp" className="w-8 h-8 md:w-10 md:h-10"/>
                </Link>
                <button onClick={handleSubscribe}>
                  <Icon icon="material-symbols:mail-outline" className="w-8 h-8 md:w-10 md:h-10"/>
                </button>
                <Link href="tel:+918788969278">
                  <Icon icon="material-symbols:call-outline" className="w-8 h-8 md:w-10 md:h-10"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full p-4 md:p-8 bg-[#0b0b0d] rounded-2xl border border-[#757575]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl font-bold">
                  Track Your <span className="text-[#e97f18]">Success</span> in <span className="text-[#e97f18]">Real-Time!</span>
                </h2>
                <p className="text-base md:text-xl text-[#e0e0e0]">
                  Gain insights into your streams and earnings effortlessly and Join us and take control of your music career!
                </p>
                <Link href="/signup">
                  <button className="px-8 py-3 text-sm md:text-lg font-semibold text-[#e97f18] border border-[#e97f18] rounded-lg hover:bg-[#e97f18] hover:text-white transition-colors">
                    Join Now
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/features.svg"
                  alt="Track Success"
                  width={490}
                  height={340}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}