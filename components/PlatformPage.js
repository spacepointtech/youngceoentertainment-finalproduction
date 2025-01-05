// 'use client';
// import Image from "next/image";
// import '@/app/globals.css';

// export default function Platform() {
//   return (
//     <div className="bg-black font-poppins">
//       {/* Heading Section */}
//       <div className="h-9 p-10 text-center">
//         <span className="text-white text-2xl font-normal">
//           We Distribute your music worldwide   <span className="text-[#e97f18] text-2xl font-bold underline">
//            120+ Streaming Platforms
//         </span>
//         </span>
       
//       </div>

//       {/* Scrolling Icons Section */}
//       <div className="overflow-hidden relative h-24 mt-10">
//         <div className="flex items-center gap-20 animate-marquee">
//           {/* Placeholder for additional icons */}
//           <Image
//             src="/images/spotify.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={140}
//             height={140}
//             className="text-white" // Ensure it's white
//           />
//            <Image
//             src="/images/youtube.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={90}
//             height={90}
//             className="text-white bg-black" // Ensure it's white
//           /> 
//           <Image
//             src="/images/apple-music.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={90}
//             height={90}
//             className="text-white" // Ensure it's white
//           /> 
//           <Image
//             src="/images/amazon.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={140}
//             height={140}
//             className="text-white" // Ensure it's white
//           /> 
         
//           <Image
//             src="/images/tidal.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={100}
//             height={100}
//             className="text-white" // Ensure it's white
//           /> 
//           <Image
//             src="/images/tiktok.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={120}
//             height={120}
//             className="text-white" // Ensure it's white
//           /> 
//            <Image
//             src="/images/instagram.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />
//           <Image
//             src="/images/groove.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={80}
//             height={80}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/facebook.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/jiosavan.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />
//            <Image
//             src="/images/pandora.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />   
//            <Image
//             src="/images/kkbox.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={100}
//             height={100}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/shazam.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />   
//            <Image
//             src="/images/yandex.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           /> 
//               <Image
//             src="/images/spotify.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={140}
//             height={140}
//             className="text-white" // Ensure it's white
//           />
//            <Image
//             src="/images/youtube.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={90}
//             height={90}
//             className="text-white bg-black" // Ensure it's white
//           /> 
//           <Image
//             src="/images/apple-music.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={90}
//             height={90}
//             className="text-white" // Ensure it's white
//           /> 
//           <Image
//             src="/images/amazon.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={140}
//             height={140}
//             className="text-white" // Ensure it's white
//           /> 
     
//           <Image
//             src="/images/tidal.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={100}
//             height={100}
//             className="text-white" // Ensure it's white
//           /> 
//           <Image
//             src="/images/tiktok.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={120}
//             height={120}
//             className="text-white" // Ensure it's white
//           /> 
//            <Image
//             src="/images/instagram.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />
//           <Image
//             src="/images/groove.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={80}
//             height={80}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/facebook.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/jiosavan.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />
//            <Image
//             src="/images/pandora.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />   
//            <Image
//             src="/images/kkbox.png" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={100}
//             height={100}
//             className="text-white" // Ensure it's white
//           />  
//            <Image
//             src="/images/shazam.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           />   
//            <Image
//             src="/images/yandex.svg" // Replace with actual path to your custom icon
//             alt="Custom Icon"
//             width={60}
//             height={60}
//             className="text-white" // Ensure it's white
//           /> 


//         </div>
//       </div>
//       <div className="p-10"> </div>
//     </div>
//   );
// }

'use client';
import Image from "next/image";
import '@/app/globals.css';

export default function Platform() {
  return (
    <div className="bg-black font-poppins">
      {/* Heading Section */}
      <div className="h-9 p-14 text-center">
        <div className="text-white text-2xl font-normal">
          We Distribute your music worldwide   
          <span className="text-[#e97f18] text-2xl font-bold underline">
             120+ Streaming Platforms
          </span>
        </div>
      </div>

      {/* Scrolling Icons Section */}
      <div className="marquee-container overflow-hidden relative h-32 mt-10">
        <div className="marquee-content flex items-center gap-20">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt="Platform Icon"
              width={icon.width}
              height={icon.height}
              className="text-white"
            />
          ))}
          {/* Duplicate content for seamless scrolling */}
          {icons.map((icon, index) => (
            <Image
              key={`duplicate-${index}`}
              src={icon.src}
              alt="Platform Icon"
              width={icon.width}
              height={icon.height}
              className="text-white"
            />
          ))}
        </div>
      </div>
      <div className="p-6"></div>
    </div>
  );
}

const icons = [
  { src: "/images/spotify.png", width: 140, height: 140 },
  { src: "/images/youtube.png", width: 90, height: 90 },
  { src: "/images/apple-music.png", width: 90, height: 90 },
  { src: "/images/amazon.svg", width: 140, height: 140 },
  { src: "/images/tidal.svg", width: 100, height: 100 },
  { src: "/images/tiktok.svg", width: 120, height: 120 },
  { src: "/images/instagram.png", width: 60, height: 60 },
  { src: "/images/groove.svg", width: 80, height: 80 },
  { src: "/images/facebook.svg", width: 60, height: 60 },
  { src: "/images/jiosavan.svg", width: 60, height: 60 },
  { src: "/images/pandora.svg", width: 60, height: 60 },
  { src: "/images/kkbox.png", width: 100, height: 100 },
  { src: "/images/shazam.svg", width: 60, height: 60 },
  { src: "/images/yandex.svg", width: 60, height: 60 },
];
