"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function Whyus({data}) {




  return (
      <section className="whyus" id="why-us" aria-label="Why choose Brno Web">   
            <div className="whyus-container">
               <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-4"
        >
           <h2 className="whyus-section-title">Why Us?</h2>
           <p className="whyus-section-abstract"> 
We’re more than just a web agency, we’re your digital growth partner. From concept to launch, we blend design, technology, and strategy to create websites that don’t just look good but perform flawlessly. Our focus is on results, innovation, and long-term value for every client we work with. </p>
                </motion.div>

           <div className="whyus-card-holder w-full">
             {data.map(item => (
               <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
   key={item._id} className="whyus-card "
        >
                 <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${item?.image}`} 
                   alt={item.title}
                   className="whyus-icon"
                   width={2000}
                   height={2000}
                  
                 />
                 <h3 className="whyus-title">{item.title}</h3>
                 <p className="whyus-description">{item.description}</p>
                               </motion.div>

             ))}
           </div>
         </div>
       </section>
  )
}
