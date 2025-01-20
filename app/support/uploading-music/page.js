// 'use client';
// import '@/app/style.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaCloudUploadAlt } from 'react-icons/fa';

// const AccountSupport = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredFaqItems = faqItems.filter(item =>
//     item.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   return (
//     <div className="support-page bg-black text-white font-poppins">
//       <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
//         <div className="container mx-auto text-left pt-24 pb-16">
//           <h1 className="text-4xl font-semibold mb-9 mt-10 text-left mx-4 ">How Can We <span className='text-[#e97f18]'> help? </span> </h1>
 
//           {/* Search Bar */}
//           <div className="relative search-container mx-5 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18]">
//             <FaSearch className="absolute left-1rem top-1/2 transform -translate-y-1/2 w-5 h-5  text-white search-icon" />
//             <input
//               type="text"
//               placeholder="Search for articles..."
//                className="search-input placeholder-opacity-30 placeholder:text-white w-[1240px] h-[84px] text-white pl-12 py-3 border border-white rounded-lg  focus:outline-none"
//               onChange={handleSearch}
//             />
//           </div>
//         </div>
//       </div>



//       {/* Back Link */}
//       <div className="container mx-16 px-6 py-4">
//         <Link href="/support" className="back-link ml-1 text-white text-lg">
//           &lt; Back
//         </Link>
//       </div>

//       {/* Support Categories */}
//       <div className="container mx-auto px-6 pb-16">
//         <div className="faq-header flex items-center justify-between mb-6">
//           <div className="flex flex-col">
//             <FaCloudUploadAlt className="text-4xl mb-4 text-[#A6A6A6]" />
//             <h2 className="text-4xl font-semibold font-poppins"> Uploading <span className='text-[#e97f18]'> Music </span></h2>
//             <p className="text-xl text-[#EBEBEB ] mb-6">How to get Started releasing music</p>
//         <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>

//           </div>

//           <div className="faq-logo">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
//           </div>
//         </div>
      
//         {/* FAQ Container */}
//         <div className="faq-container bg-[#484848] bg-opacity-[24%] w-[1240] border border-[#A6A6A6] rounded-lg p-6">
//           <div className="faq-list">
//             {filteredFaqItems.length > 0 ? (
//               filteredFaqItems.map((item, index) => (
//                 <Link
//                   key={index}
//                   href={item.url}
//                   className="faq-item block py-4 border-b border-gray-700  transition-colors duration-200"
//                 >
//                   <div className="flex justify-between text-xl ml-5 items-center mt-5">
//                     <p>{item.question}</p>
//                     <FaChevronRight className='mr-10 w-4 h-4' />
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <p className="text-center text-gray-400">No articles found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const faqItems = [
  
    
//  { 
//   question: 'Why am I blocked from uploading my music to Soundcloud?', 
//    url: '/support/uploading-music/query1'
  
// },
// { 
//   question: 'How do I change the track order on my release?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Why isn\'t my artwork being accepted?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I leave my release\'s secondary genre blank?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What if my music\'s language isn\'t available on the Release Builder?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What if my genre isn\'t available on the Release Builder?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What should I put for my record label?',
//   url: '/support/uploading-music/query1' 
// },
// { 
//   question: 'What should I put for the copyright holder & copyright year?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I use an existing ISRC code?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'How do I include featured artists on my release?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What if my music has explicit lyrics?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What format does my artwork need to be in?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'What format does my audio need to be in?',
//   url: '/support/uploading-music/query1' 
// },
// { 
//   question: 'How do I choose a song snippet for TikTok and SmartLinks?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I add credits to my releases?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I add lyrics to my release?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I upload the same track on multiple releases?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I re-release music I\’ve already released with YCE?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'Can I add my lyrics to Instagram?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'How to send large files to YCE Music', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'How do I find my Amazon Music Artist ID?', 
//    url: '/support/uploading-music/query1'
// },
// { 
//   question: 'How do I find my Audiomack Artist ID?', 
//    url: '/support/uploading-music/query1'
// },

// ];

// export default AccountSupport;



'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaRegClipboard, FaCloudUploadAlt } from 'react-icons/fa';

const UploadSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqItems = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="support-page bg-black text-white font-poppins">
      {/* Hero Section */}
      <div className="hero-section relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
        <div className="container mx-auto text-left pt-16 md:pt-24 pb-8 md:pb-16">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-9 mt-8 md:mt-16 text-left px-4 md:ml-6">
            How Can We <span className='text-[#e97f18]'> help? </span>
          </h1>

          {/* Search Bar */}
         {/* Search Bar */}
                   <div className="relative px-4 md:ml-6 search-container mx-auto md:mx-10  font-poppins">
                     <FaSearch className="absolute left-1 ml-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white search-icon" />
                     <input
                       type="text"
                       placeholder="Search for articles..."
                       className="search-input placeholder-opacity-30 hover:shadow-[0_0_20px_#e97f18] placeholder:text-white w-full h-14 md:h-[96px] text-white pl-12 py-3 border border-white rounded-lg focus:outline-none"
                       onChange={handleSearch}
                     />
                   </div>
                 </div>
               </div>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/support" className="back-link text-white text-sm md:text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-4 md:px-6 pb-16">
        <div className="faq-header flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaCloudUploadAlt className="text-2xl md:text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-2xl md:text-4xl font-semibold">
             Uploading  <span className='text-[#e97f18]'> Music  </span>
            </h2>
            <p className="text-lg md:text-xl text-[#EBEBEB] mb-4 md:mb-6">Advice on using our release Builder</p>
            <p className="text-sm md:text-base text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>
          </div>
           <Link href="/">
           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
                    </div>
          </Link>
        </div>

        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] w-full max-w-full border border-[#A6A6A6] rounded-lg p-4 md:p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="faq-item block py-2 md:py-4 border-b border-gray-700 transition-colors duration-200"
                >
                  <div className="flex justify-between text-sm md:text-xl ml-2 md:ml-5 items-center mt-2 md:mt-5">
                    <p>{item.question}</p>
                    <FaChevronRight className="mr-4 md:mr-10 w-3 md:w-4 h-3 md:h-4" />
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-400">No articles found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const faqItems = [
  
    
 { 
  question: 'Why am I blocked from uploading my music to Soundcloud?', 
   url: '/support/uploading-music/query1'
  
},
{ 
  question: 'How do I change the track order on my release?', 
   url: '/support/uploading-music/query2'
},
{ 
  question: 'Why isn\'t my artwork being accepted?', 
   url: '/support/uploading-music/query3'
},
{ 
  question: 'Can I leave my release\'s secondary genre blank?', 
   url: '/support/uploading-music/query4'
},
{ 
  question: 'What if my music\'s language isn\'t available on the Release Builder?', 
   url: '/support/uploading-music/query5'
},
{ 
  question: 'What if my genre isn\'t available on the Release Builder?', 
   url: '/support/uploading-music/query6'
},
{ 
  question: 'What should I put for my record label?',
  url: '/support/uploading-music/query7' 
},
{ 
  question: 'What should I put for the copyright holder & copyright year?', 
   url: '/support/uploading-music/query8'
},
{ 
  question: 'Can I use an existing ISRC code?', 
   url: '/support/uploading-music/query9'
},
{ 
  question: 'How do I include featured artists on my release?', 
   url: '/support/uploading-music/query10'
},
{ 
  question: 'What if my music has explicit lyrics?', 
   url: '/support/uploading-music/query11'
},
{ 
  question: 'What format does my artwork need to be in?', 
   url: '/support/uploading-music/query12'
},
{ 
  question: 'What format does my audio need to be in?',
  url: '/support/uploading-music/query13' 
},
{ 
  question: 'How do I choose a song snippet for TikTok and SmartLinks?', 
   url: '/support/uploading-music/query14'
},
{ 
  question: 'Can I add credits to my releases?', 
   url: '/support/uploading-music/query15'
},
{ 
  question: 'Can I add lyrics to my release?', 
   url: '/support/uploading-music/query16'
},

{ 
  question: 'Can I re-release music I\’ve already released with YCE?', 
   url: '/support/uploading-music/query17'
},
{ 
  question: 'Can I add my lyrics to Instagram?', 
   url: '/support/uploading-music/query18'
},
{ 
  question: 'How to send large files to YCE Music?', 
   url: '/support/uploading-music/query19'
},
{ 
  question: 'How do I find my Amazon music Artist ID?', 
   url: '/support/uploading-music/query20'
},
{ 
  question: 'How do I find my Audiomack Artist ID?', 
   url: '/support/uploading-music/query21'
},

];

export default UploadSupport;
