
"use client"
import { motion } from "framer-motion";
import EmblaCarousel from "../global/EmblaCarousel";
import Image from "next/image";


function ServiceCard({ service }) {
  return (
                                                <div
                                            className="service-card    embla__slide "
        >
                   <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${service?.image}`} 
                     width={500}
                     height={500}
                     alt={service.title}
                     className="service-card-img"
                             loading="lazy"
                   />
                   <div className="service-card-overlay" />
                   <div className="service-card-content">
                     <h2 className="service-card-title">{service.title}</h2>
                     <p className="service-card-description">{service.description}</p>
                   </div>
</div>  );
}

export default function Services({data}) {


  return (
      <section className="services" id="services" aria-label="Our services">
                          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
      className="flex flex-col items-start gap-3 w-[90%] mx-auto ">
            <h4 className='services-title-mini'>
      Services
      </h4>
      <h2 className="services-section-title ">What We Offer</h2>

        <p className='services-section-abstract '>
We turn ideas into digital realities. From crafting seamless web and mobile experiences to designing intuitive interfaces and creating engaging content, our full-stack solutions empower your business to thrive online. Whether you need smart contracts for blockchain projects, high-performance marketplaces, or SEO-driven strategies, we deliver scalable, secure, and innovative solutions tailored to your goals.        </p>
      </motion.div>
  
      <div className="services-container">
          <EmblaCarousel options={{ autoplay:true }}  >
                 {data.map((i,index) => (
                  

          
<ServiceCard key={i._id}  service={i}/>
          ))}
          </EmblaCarousel>

     
      </div>
    </section>
  );
}
