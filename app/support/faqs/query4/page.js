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

  const filteredFaqItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-page bg-black text-white font-poppins">
       <div className="hero-section relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/support.png)' }}>
        <div className="container mx-auto text-left pt-24 pb-16">
          <h1 className="text-4xl font-semibold mb-9 mt-10 text-left mx-4 ">How Can We <span className='text-[#e97f18]'> help? </span> </h1>
 
          {/* Search Bar */}
          <div className="relative search-container mx-5 hover:shadow-[0_0_20px_#e97f18] hover:border-[#e97f18]">
            <FaSearch className="absolute left-1rem top-1/2 transform -translate-y-1/2 w-5 h-5  text-white search-icon" />
            <input
              type="text"
              placeholder="Search for articles..."
               className="search-input placeholder-opacity-30 placeholder:text-white w-[1240px] h-[84px] text-white pl-12 py-3 border border-white rounded-lg  focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>


      {/* Back Link */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/support/faqs" className="back-link  text-white text-lg">
          &lt; Back
        </Link>
      </div>

      {/* Support Categories */}
      <div className="container mx-auto px-6 pb-16">
        <div className="faq-header flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <FaEdit className="text-4xl mb-4 text-[#A6A6A6]" />
            <h2 className="text-4xl font-semibold">Frequently Asked <span className='text-[#e97f18]'>  Questions </span></h2>
            <p className="text-xl text-[#EBEBEB ] mb-6">Answers to questions we are asked most often.</p>
        <p className="text-[16px] mb-12 text-[#A6A6A6]">{filteredFaqItems.length} Articles</p>

          </div>
          <Link href="/">
           <div className="faq-logo">
                      <Image src="/images/logo.png" alt="Young CEO Entertainment" height={100} width={150} />
                    </div>
          </Link>
        </div>
       
        <div className="w-[1240px] h-auto p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
    <div className="text-white text-4xl font-bold "> What payment methods does YCE accept ? </div>
    <div className="self-stretch h-5" />

    <div className="self-stretch"><span className="text-[#ebebeb] text-base font-normal font-['Poppins'] leading-normal">  
        
       <ul className="list-decimal list-inside"> 
        <li> At Young CEO Entertainment, we aim to make payments convenient and accessible for all our users. We accept the following payment <br/> methods:
      
           <ul className="ml-2 list-item list-inside"> 
           <li>   a.  Credit and Debit Cards </li>
              <ul className='ml-4 list-inside list-disc'> 
                <li> Visa </li>
                <li> Mastercard </li>
                <li> American Express </li>
               
              </ul>
           </ul>



           <ul className="ml-2 mt-4 list-item list-inside"> 
           <li>   b.  UPI (Unified Payments Interface) </li>
              <ul className='ml-4 list-inside list-disc'> 
                <li> GooglePay </li>
                <li> Phonepe </li>
                <li> Paytm </li>
               
              </ul>
           </ul>


           <ul className="ml-2 mt-4 list-item list-inside"> 
           <li> c.  Digital Wallets </li>
              <ul className='ml-4 list-inside list-disc'> 
                <li> Paypal </li>
              </ul>
           </ul>

           <ul className="ml-2 mt-4 list-item list-inside"> 
           <li> d. Bank Transfers </li>
              <ul className='ml-4 list-inside list-disc'> 
                <li> Direct transfer options are available for certain regions. </li>
              </ul>
           </ul>
           
        </li>
        
        <li className="mt-3">
        Note: All transactions are processed securely, and payment options may vary based on your location.
        </li>
        <li className="mt-3">
        If you experience any issues with payments, please contact our Support Team through the Help & Support section in your dashboard.
        </li>
       </ul>
         </span>

        

</div>

    <div className="self-stretch h-10" />
    <div className="self-stretch h-px bg-black/5" />
    <div className="self-stretch h-10" />
    <div className="self-stretch h-[72px] p-2 flex-col justify-start items-center gap-2 flex">
        <div className="text-[#e97f18] text-base font-medium mt-10">Is this article helpful?</div>
        <span className='text-[#a6a6a6] inline-flex mb-10'> <FaThumbsUp className='mr-3 w-6 h-6 hover:text-white'/> <FaThumbsDown className='w-6 h-6 hover:text-white' />  </span>
        <div className="justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>


      <div className="w-[1240px] h-[0px] mt-20 border border-[#757575]"></div>
  
        <div className="text-white text-4xl font-medium mt-20 mb-7">Related Articles</div>
  

        {/* FAQ Container */}
          {/* FAQ Container */}
          <div className="faq-container bg-[#484848] bg-opacity-[24%] w-[1240] border border-[#A6A6A6] rounded-lg p-6 font-poppins">
          <div className="faq-list">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="faq-item block py-4 border-b border-gray-700  transition-colors duration-200"
                >
                  <div className="flex justify-between text-xl ml-5 items-center mt-5">
                    <p>{item.question}</p>
                    <FaChevronRight className='mr-10 w-4 h-4' />
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
  
 
{ question: 'Will YCE promote my music?',
    url: '/support/faqs/query5'
},
{ question: 'How much will I get paid?',
  url: '/support/faqs/query6'
},
{ question: 'How do I create a new release?',
 url: '/support/faqs/query7' 
},

];

export default FaqComponent;
