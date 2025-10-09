"use client";
import React, {  useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6';
export default function Faq({data}) {
          const [open , setOpen] = useState(null);


          function toggleFaq(index){
    setOpen(open === index ? null : index);
      
          }


  return (
   <div id='faq' className="faq ">
<div className="faq-container ">
    <h4 className='faq-title-mini'>
      FAQ
    </h4>
        <h2 className="faq-title">
Frequently Asked Questions
</h2>
        <p className="faq-section-abstract ">
Have questions? We’ve got answers. Explore our FAQs to learn more about our process, services, and how we help bring your ideas to life, clearly, simply, and transparently.        </p>
        <ul className='faq-list
'>
    {data?.map((i,index)=>(

        <li key={index}  onClick={()=>toggleFaq(index)}  className='faq-item'>
            <div className='faq-top'>
            <p className='faq-question'>
                {i.question}
            </p>
            <FaAngleDown className={`${open === index ? "rotate-180" : ""} text-stone-700 transition-all `}/>
            </div>
            <p className={`${open === index ? "flex" : "hidden"} text-stone-900  font-semibold`}>
                {i.answer}
            </p>
        </li>
   ) )}

</ul>
</div>
   </div>
  )
}
