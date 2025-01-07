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
       
        <div className="w-[1240px] h-[700px] p-[60px] bg-[#121212] rounded-[10px] shadow border border-[#e97f18] flex-col justify-start items-start inline-flex">
    <div className="text-white text-4xl font-bold "> Do I need to renew my subscription? </div>
    <div className="self-stretch h-5" />

    <div className="self-stretch"><span className="text-[#ebebeb] text-base font-normal font-['Poppins'] leading-normal">  
        <p>Yes, to continue enjoying all the benefits of Young CEO Entertainment, you’ll need to renew your subscription annually. Here’s how it works:
        </p>
        <ul className='list-inside list-decimal text-[#EBEBEB]'>
          <li> Automatic Renewal Option ⚡ <br/> 
           <p className='ml-2'> 
            <ul className='list-disc list-inside ml-2'> 
               <li> If you’ve enabled auto-renewal, your subscription will renew automatically on the due date. You’ll receive a notification before the renewal happens.</li>
               <li> Ensure your payment method is up-to-date to avoid interruptions.</li>
            </ul>
            </p></li>
           
            <li> Manual Renewal 🔧 <br/> 
           <p className='ml-2'> 
            <ul className='list-disc list-inside ml-2'> 
               <li> If auto-renewal is not enabled, you can renew manually via the Account Overview section in your YCE Dashboard. </li>
               <li> You’ll receive reminders leading up to your subscription expiry date. </li>
            </ul>
            </p></li>

            <li> What Happens If You Don’t Renew? 🚫 <br/> 
           <p className='ml-2'> 
            <ul className='list-disc list-inside ml-2'> 
               <li> Your releases will remain active on music platforms. </li>
               <li> However, you won’t be able to withdraw royalties or upload new music until your subscription is renewed. </li>
            </ul>
            </p></li>
           

               </ul>
      
        
               
                 <p> Tip: Renew on time to ensure uninterrupted access to all features and benefits! 😊 <br/> 
                 For assistance, contact our support team through the Help & Support section in your dashboard.
                  </p>
 
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
  
  { question: 'Will YCE take any of my royalties?', 
    url: '/support/faqs/query10'   
},
  { question: 'How long before my release date should I upload my music?', 
    url: '/support/faqs/query11'   
},
  { question: 'Can I choose where my music is released?', 
    url: '/support/faqs/query12'   
},

];

export default FaqComponent;
