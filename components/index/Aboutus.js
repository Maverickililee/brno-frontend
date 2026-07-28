"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Aboutus({data}) {
    

      const about = data[0];
      
        if (!about) return null;
  return (
      <section className='aboutus' id="about" aria-label="About Brno Web">  
                     <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="aboutus-container"
        >
            {about &&
                      <Image
            width={2000}
            height={2000}
            alt={about.title || "About Brno Web"}
            className='aboutus-image'
            unoptimized
    src={about?.image || "/placeholder.png"} 
            />
            }
            <div className='aboutus-info'>
            <h4 className=' aboutus-title'>
                    More About Us
                </h4>
        <h2 className=' aboutus-abs'>
                    {about?.title}
                </h2>
        <p className=' aboutus-des '>
                    {about?.description}
                </p>
            </div>
  </motion.div>
    </section>
  )
}
