"use client"
import { motion } from "framer-motion";
import React, {  useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6';
export default function Faq({data}) {
          const [open , setOpen] = useState(null);


          function toggleFaq(index){
    setOpen(open === index ? null : index);
      
          }


  return (
      <section className='faq' id="faq" aria-label="Frequently Asked Questions"><div className="faq-container ">
  
                         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
    <h4 className='faq-title-mini'>
      FAQ
    </h4>
        <h2 className="faq-title">
Frequently Asked Questions
</h2>
        <p className="faq-section-abstract ">
Have questions? We’ve got answers. Explore our FAQs to learn more about our process, services, and how we help bring your ideas to life, clearly, simply, and transparently.        </p>
        </motion.div>
        <ul className='faq-list
'>
    {data?.map((i,index)=>(
                                 <motion.li
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
key={index}  onClick={()=>toggleFaq(index)}  className='faq-item'        >

            <div className='faq-top'>
            <p className='faq-question'>
                {i.question}
            </p>
            <FaAngleDown className={`${open === index ? "rotate-180" : "rotate-0"} text-stone-700 transition-all `}/>
            </div>
            <p className={`${open === index ? "flex" : "hidden"} text-stone-900  font-semibold`}>
                {i.answer}
            </p>
</motion.li>   ) )}

</ul>
</div>
   </section>
  )
}
