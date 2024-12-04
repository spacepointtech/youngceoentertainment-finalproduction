
// 'use client';
// import Image from "next/image";


// export default function Platform() {

//   return (
//     <div className="bg-black font-poppins">
//        <div className="h-9 p-10 pb-10 text-center"><span className="text-white text-2xl font-normal font-['Poppins']">We Distribute your music worldwide</span><span className="text-[#e97f18] text-2xl font-bold font-['Poppins']">  </span><span className="text-[#e97f18] text-2xl font-bold font-['Poppins'] underline">120+ Streaming Platforms</span></div>
//     </div>
   
//   );
// }

'use client';
import Image from "next/image";

export default function Platform() {
  return (
    <div className="bg-black font-poppins">
      {/* Heading Section */}
      <div className="h-9 p-10 text-center">
        <span className="text-white text-2xl font-normal">
          We Distribute your music worldwide   <span className="text-[#e97f18] text-2xl font-bold underline">
           120+ Streaming Platforms
        </span>
        </span>
       
      </div>

      {/* Scrolling Icons Section */}
      <div className="overflow-hidden relative h-24 mt-10">
        <div className="absolute flex items-center gap-8 animate-scroll">
          {/* Placeholder for additional icons */}
          <Image
            src="/images/spotify.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          />
           <Image
            src="/images/youtube.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
          <Image
            src="/images/apple.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
          <Image
            src="/images/amazon.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
          <Image
            src="/images/jio.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
          <Image
            src="/images/tidal.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
          <Image
            src="/images/tiktok.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          /> 
           <Image
            src="/images/instagram.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          />
          <Image
            src="/images/groove.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          />  
           <Image
            src="/images/facebook.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          />  
           <Image
            src="/images/jiosavan.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          />
           <Image
            src="/images/pandora.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          />   
           <Image
            src="/images/tunedglobal.png" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={100}
            height={100}
            className="text-white" // Ensure it's white
          />  
           <Image
            src="/images/shazam.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          />   
           <Image
            src="/images/yandex.svg" // Replace with actual path to your custom icon
            alt="Custom Icon"
            width={60}
            height={60}
            className="text-white" // Ensure it's white
          /> 
           


        </div>
      </div>
      <div className="p-10"> </div>
    </div>
  );
}