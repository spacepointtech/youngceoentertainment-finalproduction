// 'use client';
// import '@/app/style.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaSearch, FaChevronRight, FaChevronDown, FaUser, FaHome, FaUserAlt } from 'react-icons/fa';

// const AccountSupport = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openIndex, setOpenIndex] = useState(null);

//   const filteredFaqItems = faqItems.filter(item =>
//     item.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="support-page bg-black text-white font-poppins">
      
//       <div className="hero-section relative">
//         <div className="container mx-auto text-center pt-24">
//           <h1 className="text-4xl font-semibold mb-8 text-left ml-6">How Can we help?</h1>

//           {/* Search Bar */}
//           <div className="relative search-container mx-auto mb-12">
//             <input
//               type="text"
//               placeholder="Search for articles..."
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               className="search-input ml-5 placeholder-opacity-30 text-white pl-12 py-3 border border-white rounded-lg w-full h-[84px] focus:outline-none"
//             />
//             <FaSearch className="absolute left-4  top-1/2 transform -translate-y-1/2 text-white search-icon" />
//           </div>
//         </div>

       
//       </div>

//       {/* Back Link */}
//       <div className="container mx-auto px-6 py-4">
//         <Link href="/support" className="back-link text-white text-lg opacity-50">
//           &lt; Back
//         </Link>
//       </div>

//       {/* Support Categories */}
//       <div className="container mx-auto px-6 pb-16">
//         <div className="faq-header flex items-center justify-between mb-6">
//           <div className="flex flex-col">
//             <FaUserAlt className="text-4xl mb-4 opacity-30"/>
//             <h2 className="text-2xl font-semibold">Your Account</h2>
//           </div>
//           <div className="faq-logo">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" height={200} width={200} />
//           </div>
//         </div>
//         <p className="text-sm opacity-75 mb-6">How to get Started releasing music</p>
//         <p className="text-sm opacity-50 mb-12">{filteredFaqItems.length} Articles</p>

//         {/* FAQ Container */}
//         <div className="faq-container bg-[#484848] bg-opacity-[24%] border border-[#A6A6A6] rounded-lg p-6">
//           <div className="faq-list">
//             {filteredFaqItems.length > 0 ? (
//               filteredFaqItems.map((item, index) => (
//                 <div key={index} className="faq-item flex flex-col py-4 border-b border-gray-700">
//                   <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
//                     <p>{item.question}</p>
//                     {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
//                   </div>
//                   {openIndex === index && (
//                     <div className="answer-box bg-[#484848] bg-opacity-[50%] border border-[#A6A6A6] rounded-lg p-4 mt-4">
//                       <p>{item.answer || 'loremipsum50'}</p> {/* Placeholder text */}
//                     </div>
//                   )}
//                 </div>
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
//   { question: 'When is my subscription renewal date?', answer: 'Your subscription renewal date is typically one year from the date of your last payment. You can check the exact renewal date by logging into your account and navigating to the "PROFILE" section.' },
//   { question: 'How do I see my orders & transaction history?', answer: 'To view your orders and transaction history, log into your account and go to the "Orders" section under your profile. There, you can see a detailed list of all your past transactions.' },
//   { question: 'When will I get a response from my support query?', answer: 'Support queries are typically responded to within 24-48 hours. During peak times, it may take slightly longer. You will receive a notification once your query has been addressed.' },
//   { question: 'What if I forgot my password?', answer: 'If you forgot your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions to receive a password reset link via email.' },
//   { question: 'Why has my account been suspended?', answer: 'Your account may be suspended due to non-payment, violation of terms of service, or suspicious activity. Please contact our support team to resolve the issue and regain access to your account.' },
//   { question: 'What currency will my transactions and royalties be displayed in?', answer: 'Transactions and royalties are displayed in the currency of your country. However, you can change this preference in the account settings if you wish to see it in a different currency.' },
//   { question: 'How do I change the email address linked to my account?', answer: 'To change the email address linked to your account, log in and go to the "Account Settings" section. From there, you can update your email address.' },
//   { question: 'Can I remove an artist from my plan?', answer: 'Yes, you can remove an artist from your plan by navigating to the "Manage Artists" section in your account. Select the artist you want to remove and confirm the action.' },
//   { question: 'How do I update the phone number linked to my YCE account?', answer: 'To update your phone number, go to the "Account Settings" section of your profile. Enter your new phone number and verify it through the confirmation code sent to your device.' },
//   { question: 'I\'ve been wrongly charged', answer: 'If you believe you have been wrongly charged, please contact our support team with the details of the transaction. We will investigate the issue and provide a resolution.' },
//   { question: 'Can I renew my subscription early?', answer: 'Yes, you can renew your subscription early by going to the "Subscription" section in your account. Choose the "Renew Now" option and complete the payment process.' },
//   { question: 'What is YCE Independent Label?', answer: 'YCE Independent Label is a subscription-based service that allows independent artists to distribute their music across major streaming platforms with additional support and promotional tools.' },
//   { question: 'I’ve been moved onto the new YCE Independent Label. How does it work?', answer: 'If you have been moved to the new YCE Independent Label, your existing releases will remain active. You will gain access to new features and tools designed to enhance your music distribution experience.' },
//   { question: 'What is Release Protection?', answer: 'Release Protection is an optional add-on that ensures your music remains live on streaming platforms even if your subscription lapses or is canceled. It also protects against accidental takedowns.' },
//   { question: 'How does the EPK Builder work?', answer: 'The EPK (Electronic Press Kit) Builder is a tool that helps you create a professional press kit for your music. It includes customizable templates, media upload options, and sharing capabilities to help you promote your work.' },
// ];

// export default AccountSupport;


// 'use client';
// import '@/app/style.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaSearch, FaChevronRight, FaUserAlt } from 'react-icons/fa';

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
//       <div className="container mx-8 px-6 py-4">
//         <Link href="/support" className="back-link ml-1 text-white text-lg">
//           &lt; Back
//         </Link>
//       </div>

//       {/* Support Categories */}
//       <div className="container mx-auto px-6 pb-16">
//         <div className="faq-header flex items-center justify-between mb-6">
//           <div className="flex flex-col">
//             <FaUserAlt className="text-4xl mb-4 text-[#A6A6A6]" />
//             <h2 className="text-4xl font-semibold">Your <span className='text-[#e97f18]'>  Account </span></h2>
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
//     {
//         question: 'What is Young Ceo Entertainment?',
//         url: '/support/your-account/query1'
//       },
//       {
//         question: 'How much does music distribution cost with Young Ceo Entertainment?',
//         url: '/support/your-account/query2'
//       },
//   {
//     question: 'Can I release music for multiple artists from one account ?',
//     answer: 'Your subscription renewal date is typically one year from the date of your last payment.',
//     url: '/support/your-account/query3'
//   },
//   {
//     question: 'Can I release music for multiple artists from one account ?',
//     url: '/support/your-account/query4'
//   },
//   {
//     question: 'Who owns the rights to my music when I distribute with YCE ?',
//     url: '/support/your-account/query5'
//   },

//   {
//     question: "What does 'In Review', 'Scheduled' and 'Sent To Stores' mean on my releases ?",
//     url: '/support/your-account/query6'
//   },
//   {
//     question: "Can I release music in specific countries ?",
//     url: '/support/your-account/query7'
//   },
//   {
//     question: "Can I view my music analytics in more detail ?",
//     url: '/support/your-account/query8'
//   },
//   {
//     question: "How does Pre-Release work ?",
//     url: '/support/your-account/query9'
//   },
//   {
//     question: "What is Pre-Order Instant Gratification ?",
//     url: '/support/your-account/query10'
//   },
//   {
//     question: "Can I set the price of my music ?",
//     url: '/support/your-account/query11'
//   },
//   {
//     question: "Can I release someone else's music from my account ?",
//     url: '/support/your-account/query12'
//   },
//   {
//     question: "Can I choose where my music is released ?",
//     url: '/support/your-account/query13'
//   },
//   {
//     question: "How many tracks are on a single, EP and album ?",
//     url: '/support/your-account/query14'
//   },
//     {
//     question: "When will my YCE Merch arrive ?",
//     url: '/support/your-account/query15'
//   },
//   {
//     question: "Does YCE Music offer a free trial?",
//     url: '/support/your-account/query2'
//   },



// ];

// export default AccountSupport;


'use client';
import '@/app/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaChevronRight, FaUserAlt } from 'react-icons/fa';

const AccountSupport = () => {
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
            <FaUserAlt className="text-2xl md:text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-2xl md:text-4xl font-semibold">
              Your <span className='text-[#e97f18]'> Account </span>
            </h2>
            <p className="text-lg md:text-xl text-[#EBEBEB] mb-4 md:mb-6">How to get Started releasing music</p>
            <p className="text-sm md:text-base text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>
          </div>

           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
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
    question: 'What is Young Ceo Entertainment?',
    url: '/support/your-account/query1',
  },
  {
    question: 'How much does music distribution cost with Young Ceo Entertainment?',
    url: '/support/your-account/query2',
  },
  {
    question: 'Can I release music for multiple artists from one account?',
    url: '/support/your-account/query3',
  },
  {
    question: 'Who owns the rights to my music when I distribute with YCE?',
    url: '/support/your-account/query5',
  },
   
  {
    question: "What does 'In Review', 'Scheduled' and 'Sent To Stores' mean on my releases?",
    url: '/support/your-account/query6'
  },
  {
    question: "Can I release music in specific countries?",
    url: '/support/your-account/query7'
  },
  {
    question: "Can I view my music analytics in more detail?",
    url: '/support/your-account/query8'
  },
  {
    question: "How does Pre-Release work?",
    url: '/support/your-account/query9'
  },
  {
    question: "What is Pre-Order Instant Gratification?",
    url: '/support/your-account/query10'
  },
  {
    question: "Can I set the price of my music?",
    url: '/support/your-account/query11'
  },
  {
    question: "Can I release someone else's music from my account?",
    url: '/support/your-account/query12'
  },
  {
    question: "Can I choose where my music is released?",
    url: '/support/your-account/query13'
  },
  {
    question: "How many tracks are on a single, EP and album?",
    url: '/support/your-account/query14'
  },
    {
    question: "When will my YCE Merch arrive?",
    url: '/support/your-account/query15'
  },
  {
    question: "Does YCE Music offer a free trial?",
    url: '/support/your-account/query16'
  },

];

export default AccountSupport;
