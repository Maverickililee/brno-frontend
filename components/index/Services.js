
import EmblaCarousel from "../global/EmblaCarousel";
import Image from "next/image";


export default function Services({data}) {


  return (
    <section className="services ">
      <div className="flex flex-col items-start gap-3 w-[90%] mx-auto ">
            <h4 className='services-title-mini'>
      Services
      </h4>
      <h2 className="services-section-title ">What We Offer</h2>

        <p className='services-section-abstract '>
We turn ideas into digital realities. From crafting seamless web and mobile experiences to designing intuitive interfaces and creating engaging content, our full-stack solutions empower your business to thrive online. Whether you need smart contracts for blockchain projects, high-performance marketplaces, or SEO-driven strategies, we deliver scalable, secure, and innovative solutions tailored to your goals.        </p>
      </div>
  
      <div className="services-container">
          <EmblaCarousel options={{ autoplay:true }}  >
                 {data.map((i,index) => (
        <div key={i._id} className="service-card    embla__slide ">
                   <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${i?.image}`} 
                     width={500}
                     height={500}
                     alt={i.title}
                     className="service-card-img"
                   />
                   <div className="service-card-overlay" />
                   <div className="service-card-content">
                     <h2 className="service-card-title">{i.title}</h2>
                     <p className="service-card-description">{i.description}</p>
                   </div>
                 </div>

          ))}
          </EmblaCarousel>

     
      </div>
    </section>
  );
}
