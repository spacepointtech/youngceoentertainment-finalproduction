
// import Image from 'next/image'


// export default function ServicesPage() {
//   return (
//     <div className="bg-black min-h-screen w-full text-white font-poppins">
//       <div className="relative w-full top-100 h-[400px] pt-16">
//         <Image
//           src="/images/orangevector.png"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           className="relative"
//         />
//       </div>

//       {/* Our Services Section */}
//       <div className="absolute top-1/4 left-0 transform -translate-y-1/2 w-full p-10"> 
//         <h1 className="text-4xl font-bold"> <span className="text-[#e97f18]"> Our   </span>Services</h1>
//         <p className="mt-2 text-lg text-justify opacity-70">
//           At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms.
//         </p>
//       </div>
//    <div className="w-[1440px] h-[3304px] pl-24 pr-[97px] pt-[285px] pb-[533.60px] bg-black flex-col justify-start items-start gap-[168px] inline-flex">
//     <div className="h-[1952.40px] flex-col justify-center items-start gap-20 inline-flex">
//         <div className="self-stretch h-[338px] justify-start items-start gap-[104px] inline-flex">
//             <div className="w-[526px] flex-col justify-start items-start gap-2 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Global</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Music Distribution</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="w-[338.67px] justify-between items-center inline-flex">
//                     <div className="w-[41.67px] h-[41.67px] relative">
//                     </div>
//                     <div className="w-[45px] h-[45px] relative" />
//                     <div className="w-[49px] h-[49px] relative" />
//                     <div className="w-[74px] h-[74px] relative" />
//                     <div className="text-[#e97f18] text-xl font-normal font-['Poppins'] leading-[29.16px] tracking-tight">+ 120</div>
//                 </div>
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
//               src="/images/Dashboard.png"
//               alt="Artist Dashboard"
//               width={599}
//               height={575}
//               className="rounded-lg w-[599px] h-[575px]"
//             />
//             <div className="w-[548px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="h-[458px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Artist </span><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Dashboard</span></div>
//                     <div className="self-stretch text-white text-xl font-normal  leading-[30px] tracking-tight">Our artist dashboard is all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms. It provides real-time insights into listener demographics, geographical data, and streaming performance, helping artists understand their audience and make informed decisions. The dashboard also offers transparent revenue and royalty tracking, ensuring artists can monitor their earnings efficiently.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
//                     <div className="w-[95px] text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Smart Link</div>
//                     <div className="text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Pre-save Link</div>
//                     <div className="text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Performance analytics</div>
//                     <div className="text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight"> Premium Features</div>
//                 </div>
//             </div>
//         </div>
//         <div className="self-stretch justify-start items-start gap-[50px] inline-flex">
//             <div className="w-[572px] flex-col justify-start items-center gap-3 inline-flex">
//                 <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
//                     <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Revenue</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Tracking</span></div>
//                     <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
//                 </div>
//                 <div className="self-stretch justify-start items-center inline-flex">
//                     <div className="w-[167px] text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Real Time Insights</div>
//                     <div className="w-[137px] text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Active Audience</div>
//                     <div className="w-[167px] text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Geographical data</div>
//                     <div className="w-[101px] text-[#e97f18] text-sm font-normal font-['Poppins'] leading-[14.81px] tracking-tight">Many More</div>
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
//             <h2 className="text-3xl font-semibold">24/7 Artist <span className="text-[#e97f18]"> Support </span> </h2>
//             <p className="mt-4 text-lg text-justify w-[550px]">
//               Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
//             </p>
//           </div>
//         </div>
//     </div>

//       {/* Track Success Box */}
//     <div className="self-stretch px-11 py-2.5 bg-[#0b0b0d] rounded-2xl border border-[#757575] flex-col justify-start items-start gap-2.5 inline-flex">
      
//         <div className="w-[1157px] px-[15px] justify-between items-center inline-flex">
          
//             <div className="w-[630px] flex-col justify-start items-start gap-5 inline-flex">
              
//                 <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
                  
//                     <div className="self-stretch"><span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">Track Your</span><span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Success </span><span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">in</span><span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Real-Time!</span></div>
//                     <div className="w-[499px] text-[#e0e0e0] text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">Gain insights into your streams and earnings effortlessly and Join us and take control of your music career!</div>
                    
//                 </div>
               
              
            
//                 <div className="w-[269px] justify-start items-start gap-[41.20px] inline-flex">
                  
//                     <div className="grow shrink basis-0 h-[62px] px-[74px] py-4 rounded-lg border border-[#e97f18] justify-center items-center gap-2.5 flex">
                      
//                         <div className="w-[94px] text-[#e97f18] text-xl font-semibold font-['Poppins']">Join Now</div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[484px] h-[345px]" />
//         </div>
//     </div>
// </div>
//     </div>
//   )
// }


import Image from 'next/image'
import { FaAmazon, FaItunes, FaLocationArrow, FaMailBulk, FaMap, FaPhone, FaSearchLocation, FaSpotify, FaWhatsapp, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'


export default function ServicesPage() {
  return (
    <div className="bg-black w-[1440px] h-[3304px] text-white font-poppins">
      <div className="relative w-full top-100 h-[400px] pt-16">
        <Image
          src="/images/orangevector.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="relative"
        />
      </div>

      {/* Our Services Section */}
      <div className="absolute top-1/4 left-0 transform -translate-y-1/2 w-full p-10"> 
        <h1 className="text-4xl font-bold"> <span className="text-[#e97f18]"> Our   </span>Services</h1>
        <p className="mt-4 text-white text-lg text-justify">
          At Young CEO Entertainment, we are dedicated to empowering artists by providing top-tier music distribution and promotional services. Our mission is to help you reach global audiences through innovative solutions and partnerships with major streaming platforms.
        </p>
      </div>
   <div className="w-[1440px] h-[304px] pl-24 pr-[97px] pt-[285px] pb-[533.60px] bg-black flex-col justify-start items-start gap-[168px] inline-flex mt-44">
    <div className="h-[1952.40px] flex-col justify-center items-start gap-20 inline-flex">
        <div className="self-stretch h-[338px] justify-start items-start gap-[104px] inline-flex">
            <div className="w-[526px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Global</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Music Distribution</span></div>
                    <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
                </div>
                <div className="w-[338.67px] justify-start items-start inline-flex">
 
                </div>
                <span className="inline-flex text-[#e97f18]">   <FaSpotify className="text-[#e97f18] w-[41px] h-[41px] mr-2" />
                     <FaAmazon className="w-[41px] h-[41px] mr-4" />
                     <FaYoutube className=" w-[41px] h-[41px] mr-4" />
                     <FaItunes className=" w-[41px] h-[41px] mr-4" /> 
                     <span className="text-3xl text-nowrap"> +120 </span>
                     </span>
            </div>
            <Image
              src="/images/globe.png"
              alt="globe"
              width={599}
              height={338}
              className=" w-[599px] h-[338px]"
            />

        </div>
        <div className="self-stretch h-[575px] justify-start items-start gap-[100px] inline-flex">
        <Image
              src="/images/Dashboard.png"
              alt="Artist Dashboard"
              width={599}
              height={575}
              className="rounded-lg w-[599px] h-[575px]"
            />
            <div className="w-[548px] flex-col justify-start items-center gap-3 inline-flex">
                <div className="h-[458px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch"><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Artist </span><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Dashboard</span></div>
                    <div className="self-stretch text-white text-xl font-normal  leading-[30px] tracking-tight">Our artist dashboard is all-in-one platform that gives artists complete control over their music distribution, performance analytics, and promotion. With a user-friendly interface, artists can easily upload and organize their music, manage metadata, and schedule releases across major streaming platforms. It provides real-time insights into listener demographics, geographical data, and streaming performance, helping artists understand their audience and make informed decisions. The dashboard also offers transparent revenue and royalty tracking, ensuring artists can monitor their earnings efficiently.</div>
                </div>
                <div className="self-stretch justify-start items-center inline-flex">
                <ul className="text-sm inline-flex list-disc font-normal text-[#e97f18]">
                      <li className="text-[#e97f18] mr-8"> Smart Link </li>
                      <li className="text-[#e97f18] mr-8 "> Pre-save Link </li>
                      <li className="text-[#e97f18] mr-8"> Performance analytics </li>
                      <li className="text-[#e97f18]">  Premium Features </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-start gap-[50px] inline-flex">
            <div className="w-[572px] flex-col justify-start items-center gap-3 inline-flex">
                <div className="self-stretch h-[248px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch"><span className="text-[#e97f18] text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight">Revenue</span><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[60px] tracking-tight"> Tracking</span></div>
                    <div className="self-stretch text-white text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">We ensure your music reaches every corner of the world by distributing your tracks to major streaming platforms, including Spotify, Apple Music, YouTube Music, and more. Our seamless process guarantees that your songs are available to fans worldwide with just a few clicks.</div>
                </div>
                <div className="self-stretch justify-start items-center inline-flex">
                   
                    <ul className="text-sm inline-flex list-disc font-normal text-[#e97f18]">
                      <li className="text-[#e97f18] mr-8">Real Time Insights </li>
                      <li className="text-[#e97f18] mr-8"> Active Audience </li>
                      <li className="text-[#e97f18] mr-8"> Geographical data </li>
                      <li className="text-[#e97f18]"> Many More </li>
                    </ul>
                </div>
            </div>
            <Image
              src="/images/revenue.png"
              alt="Revenue Tracking"
              width={599}
              height={457}
              className="rounded-lg w-[599px] h-[457px]"
            />
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className=" w-[599px] h-[500px]">
          <Image
              src="/images/supportive.png"
              alt="24 X 7"
              width={599}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-semibold">24/7 Artist <span className="text-[#e97f18]"> Support </span> </h2>
            <p className="mt-4 text-lg text-justify w-[550px]">
              Our dedicated team is always here to support you throughout your musical journey. Whether you need assistance with distribution, marketing, or anything in between, we are just a message away to provide the help you need.
            </p>
            <span className="inline-flex text-[#e97f18] mt-5">   <FaSearchLocation className="text-[#e97f18] w-[41px] h-[41px] mr-2" />
                     <FaWhatsapp className="w-[41px] h-[41px] mr-5" />
                     <FiMail className=" w-[41px] h-[41px] mr-5" />
                     <FaPhone className=" w-[41px] h-[41px] mr-5" /> 
                    
                     </span>
          </div>
          
        </div>
              {/* Track Success Box */}
        <div className="w-[1157px] h-[345px] self-stretch px-11 py-2.5 bg-[#0b0b0d] rounded-2xl border border-[#757575] flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="w-[1157px] px-[15px] justify-between items-center inline-flex">
    <div className="w-[630px] flex-col justify-start items-start gap-5 inline-flex">
      <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch">
          <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">Track Your</span>
          <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Success </span>
          <span className="text-white text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight">in</span>
          <span className="text-[#e97f18] text-4xl font-bold font-['Poppins'] leading-[54px] tracking-tight"> Real-Time!</span>
        </div>
        <div className="w-[499px] text-[#e0e0e0] text-xl font-normal font-['Poppins'] leading-[30px] tracking-tight">
          Gain insights into your streams and earnings effortlessly and Join us and take control of your music career!
        </div>
      </div>
      <div className="w-[269px] justify-start items-start gap-[41.20px] inline-flex">
        <div className="grow shrink basis-0 h-[62px] px-[74px] py-4 rounded-lg border border-[#e97f18] justify-center items-center gap-2.5 flex">
          <div className="w-[94px] text-[#e97f18] text-xl font-semibold font-['Poppins']">Join Now</div>
        </div>
      </div>
    </div>
    <div className="w-[480px] h-[340px] mr-20">
      <Image
        src="/images/features.png"
        alt="Track Success"
        width={490}
        height={340}
        className="rounded-lg"
      />
    </div>
  </div>
    </div>
        

</div>
          
        </div>
    </div>


  )
}
