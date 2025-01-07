// 'use client';
// import '@/app/style.css';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaThumbsUp, FaThumbsDown, FaUserAlt } from 'react-icons/fa';
// import Link from 'next/link';
// const FaqComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openIndex, setOpenIndex] = useState(null);

//     const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const filteredFaqItems = faqItems.filter(item =>
//     item.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="support-page bg-black text-white font-poppins">
//        <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
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
//       <div className="container mx-10 px-6 py-4">
//         <Link href="/support" className="back-link  text-white text-lg">
//           &lt; Back
//         </Link>
//       </div>

//       {/* Support Categories */}
//       <div className="container mx-auto px-6 pb-16">
//         <div className="faq-header flex items-center justify-between mb-6">
//           <div className="flex flex-col">
//             <FaEdit className="text-4xl mb-4 text-[#A6A6A6]" />
//             <h2 className="text-4xl font-semibold">Frequently Asked <span className='text-[#e97f18]'>  Questions </span></h2>
//             <p className="text-xl text-[#EBEBEB ] mb-6">Answers to questions we are asked most often.</p>
//         <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>

//           </div>
//           <div className="faq-logo">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
//           </div>
//         </div>
       
//         <div className="w-[1240px] h-[443px] p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
//     <div className="text-white text-4xl font-bold font-['Poppins']"> What do I need to start releasing music ? </div>
//     <div className="self-stretch h-5" />
//     <div className="self-stretch"><span className="text-[#ebebeb] text-base font-normal font-['Poppins'] leading-normal">  
        
               
//          </span>

        

// </div>

//     <div className="self-stretch h-10" />
//     <div className="self-stretch h-px bg-black/5" />
//     <div className="self-stretch h-10" />
//     <div className="self-stretch h-[72px] p-2 flex-col justify-start items-center gap-2 flex">
//         <div className="text-[#e97f18] text-base font-medium ">Is this article helpful?</div>
//         <span className='text-[#a6a6a6] inline-flex'> <FaThumbsUp className='mr-3 w-6 h-6 hover:text-white'/> <FaThumbsDown className='w-6 h-6 hover:text-white' />  </span>
//         <div className="justify-start items-start gap-2.5 inline-flex">
//             <div className="w-6 h-6 relative" />
//             <div className="w-6 h-6 relative" />
//         </div>
//     </div>
// </div>


//       <div className="w-[1240px] h-[0px] mt-20 border border-[#757575]"></div>
  
//         <div className="text-white text-4xl font-medium mt-20 mb-7">Related Articles</div>
  

//         {/* FAQ Container */}
//           {/* FAQ Container */}
//           <div className="faq-container bg-[#484848] bg-opacity-[24%] w-[1240] border border-[#A6A6A6] rounded-lg p-6 font-poppins">
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



// // FAQ Items
// const faqItems = [
  
//   {
//       question: 'How do I remove a release from stores ?',
//       url: '/support/faqs/query2'
//     },
// {
//   question: 'What payment methods does YCE accept ?',
//   answer: 'Your subscription renewal date is typically one year from the date of your last payment.',
//   url: '/support/faqs/query3'
// },
// {
//   question: 'Will YCE promote my music ?',
//   url: '/support/faqs/query4'
// },
// {
//   question: 'How much will I get paid ?',
//   url: '/support/faqs/query4'
// },
// {
//   question: 'How do I create a new release ?',
//   url: '/support/faqs/query4'
// },

// ];

// export default FaqComponent;


'use client';
import '@/app/style.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronRight, FaChevronDown, FaEdit, FaThumbsUp, FaThumbsDown, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';

const FaqComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqItems = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
      <div
        className="hero-section relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/support.png)' }}
      >
        <div className="container mx-auto text-left pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold mb-9 mt-10 text-left mx-4">
            How Can We <span className="text-[#e97f18]">help?</span>
          </h1>

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
        <Link href="/support/faqs" className="back-link text-white text-sm md:text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="faq-header flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          <div className="flex flex-col mb-6 lg:mb-0">
            <FaEdit className="text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-4xl font-semibold">
              Frequently Asked <span className="text-[#e97f18]">Questions</span>
            </h2>
            <p className="text-xl text-[#EBEBEB] mb-6">Answers to questions we are asked most often.</p>
            <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>
          </div>
          <Link href="/">
           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
                    </div>
          </Link>
        </div>

        <div className="w-[1240px] h-auto p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
          <div className="text-white text-4xl font-bold font-['Poppins']">
            What do I need to start releasing music?
          </div>
          <div className="self-stretch h-5" />
          <div className="self-stretch">
            <span className="text-[#ebebeb] text-base font-normal font-['Poppins'] leading-normal">
              <p> Getting your music out into the world is exciting, and with Young CEO Entertainment, the process is smooth and simple. Here’s everything you need to get started:</p>
             
              <ul className='list-inside list-decimal'> 
              <li>A Finished Track 🎧</li>
              <ul className='list-disc list-inside'>
                  <li> Ensure your track is fully mixed and ready for release. It should sound polished and well-balanced before submission. </li>
                  <li> Formats: Most platforms accept audio files in WAV or MP3 formats. </li>
              </ul>

              <li>Artwork and Cover Image 🎨</li>
              <ul className='list-disc list-inside'>
                  <li> You’ll need a cover image for your release. This is the visual representation that will appear on platforms like Spotify, Apple Music, etc. </li>
                  <li> The ideal size for most platforms is 3000 x 3000 px. Ensure the image is high quality and relevant to your music. </li>
              </ul>


             


              <li>Metadata 📝</li>
              <ul className='list-disc list-inside'>
                  <li> Accurate and complete metadata is crucial for your music to be properly listed and credited. </li>
                  <li> You'll Need:
                    <ul className='list-inside ml-8 list-disc'>
                      <li> 
                      Artist Name
                      </li>
                      <li> 
                      Track Title
                      </li>
                      <li> 
                      Album/EP Name (if applicable)
                      </li>
                      <li> 
                      Songwriters & Producers credits
                      </li>
                      <li> 
                        Release Date
                      </li>
                       </ul>
                     </li>
              </ul>




              <li>4. Release Plans 🎯</li>
              <ul className='list-disc list-inside'>
                  <li> Decide on your release date and timeline. It’s important to plan ahead to ensure your music is ready to go live on time. </li>
                  <li> Young CEO Entertainment recommends uploading your music 7–14 days before the release date to avoid any delays. </li>
              </ul>




              <li>Social Links (Optional) 🌐</li>
              <ul className='list-disc list-inside'>
                  <li> Add your social media links to your profile so listeners can connect with you easily. These will help build your online presence and promote your music. </li>
              </ul>



              <li>Subscription Plan 🔑</li>
              <ul className='list-disc list-inside'>
                  <li> Choose a subscription plan with Young CEO Entertainment based on the features you need (e.g., distribution to all platforms, analytics, etc.). </li>
                  <li> If you’re unsure which plan suits you, you can contact the support team for guidance. </li>
              </ul>


              <li>Payment Details 💳</li>
              <ul className='list-disc list-inside'>
                  <li> Set up your payment details to receive royalty payments. This can include linking a bank account or PayPal. </li>
              </ul>

                
              <li>Rights and Permissions 🔒</li>
              <ul className='list-disc list-inside'>
                   <li> Ensure you have all the necessary rights and permissions for your music, including any samples or features used. </li>
               <li>    If you’re including remixes, you might need permission from the original artist or composer.  </li>
              </ul>
              </ul>

            </span>
          </div>
          <div className="self-stretch h-10" />
          <div className="self-stretch h-px bg-black/5" />
          <div className="self-stretch h-10" />
          <div className="self-stretch h-[72px] p-2 flex flex-col justify-start items-center gap-2">
            <div className="text-[#e97f18] text-base font-medium">Is this article helpful?</div>
            <span className="text-[#a6a6a6] inline-flex">
              <FaThumbsUp className="mr-3 w-6 h-6 hover:text-white" />
              <FaThumbsDown className="w-6 h-6 hover:text-white" />
            </span>
          </div>
        </div>

        <div className="w-full lg:w-[1240px] h-0 mt-20 border border-[#757575]"></div>

        <div className="text-white text-4xl font-medium mt-20 mb-7">Related Articles</div>

        {/* FAQ Container */}
        <div className="faq-container bg-[#484848] bg-opacity-[24%] w-full lg:w-[1240px] border border-[#A6A6A6] rounded-lg p-6">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="faq-item block py-4 border-b border-gray-700 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center text-xl ml-5 mt-5">
                    <p>{item.question}</p>
                    <FaChevronRight className="mr-10 w-4 h-4" />
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

// FAQ Items
const faqItems = [
 
  { question: 'How much does it cost with Young CEO Entertainment?', 
    url: '/support/faqs/query2'
},
  { question: 'How do I remove a release from stores?',
        url: '/support/faqs/query3'
     },
  { question: 'What payment methods does YCE accept?',
      url: '/support/faqs/query4'
    },
    
];

export default FaqComponent;
