// 'use client';
// import '@/app/style.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaCloudUploadAlt, FaDollarSign, FaDesktop } from 'react-icons/fa';

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
//             <FaDesktop className="text-4xl mb-4 text-[#A6A6A6]" />
//             <h2 className="text-4xl font-semibold font-poppins"> Music <span className='text-[#e97f18]'> Platforms </span></h2>
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
//   {
//     question: 'How do I check if my music is live in stores?',
//    url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'Why is my release not live on Apple Music or iTunes?',
//    url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'What payment methods does YCE accept?',
//     url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'What is YouTube Music?',
//   url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'How do I sign up for Apple Music for Artists?',
//    url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'How do I get a blue tick on my Spotify profile?',
//    url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'How do I sign up for Spotify for Artists?',
//    url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'Which stores & platforms can I release my music on?',
//     url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'Can I release music to Instagram & Facebook?',
//     url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'How do I find my Spotify ID?',
//     url: '/support/music-platforms/query1'
//   },
//   {
//     question: 'What is artificial streaming?',
//     url: '/support/music-platforms/query1'
//   },
//       {
//         question: 'Why don\’t my streams and views match my royalty payments?',
//           url: '/support/music-platforms/query1'
//       },

// ];

// export default AccountSupport;



'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt, FaCheck, FaEdit, FaRegClipboard, FaDollarSign, FaDeskpro, FaDesktop } from 'react-icons/fa';

const PlatformSupport = () => {
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
            <FaDesktop className="text-2xl md:text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-2xl md:text-4xl font-semibold">
             Music <span className='text-[#e97f18]'> Platforms  </span>
            </h2>
            <p className="text-lg md:text-xl text-[#EBEBEB] mb-4 md:mb-6">Adice on music streaming, download and social media services.</p>
            <p className="text-sm md:text-base text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>
          </div>

          <div className="faq-logo mt-6 md:mt-0">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" height={120} width={120} className="md:h-[200px] md:w-[200px]" />
          </div>
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
    question: 'How do I check if my music is live in stores?',
   url: '/support/music-platforms/query1'
  },
  {
    question: 'Why is my release not live on Apple Music or iTunes?',
   url: '/support/music-platforms/query2'
  },
  {
    question: 'Can I release music to Beatport?',
    url: '/support/music-platforms/query3'
  },
  {
    question: 'What is YouTube music?',
  url: '/support/music-platforms/query4'
  },
  {
    question: 'How do I sign up for Spotify for Artists?',
   url: '/support/music-platforms/query5'
  },
  {
    question: 'How do I get a blue tick on my Spotify profile?',
   url: '/support/music-platforms/query6'
  },
  {
    question: 'How do I sign up for Apple Music for Artists?',
   url: '/support/music-platforms/query7'
  },
  {
    question: 'Which stores & platforms can I release my music on?',
    url: '/support/music-platforms/query8'
  },
  {
    question: 'Can I release music to Instagram & Facebook?',
    url: '/support/music-platforms/query9'
  },
  {
    question: 'Can I add or remove songs to a release that is live?',
    url: '/support/music-platforms/query10'
  },
  {
    question: 'What is artificial streaming?',
    url: '/support/music-platforms/query11'
  },
      {
        question: 'Why don\’t my streams and views match my royalty payments?',
          url: '/support/music-platforms/query12'
      },

];

export default PlatformSupport;
