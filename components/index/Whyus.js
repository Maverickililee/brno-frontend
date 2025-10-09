import Image from "next/image";

export default function Whyus({data}) {




  return (
   <section className="whyus">
         <div className="whyus-container">
           <h2 className="whyus-section-title">Why Us?</h2>
           <p className="whyus-section-abstract"> 
We’re more than just a web agency, we’re your digital growth partner. From concept to launch, we blend design, technology, and strategy to create websites that don’t just look good but perform flawlessly. Our focus is on results, innovation, and long-term value for every client we work with. </p>
   
           <div className="whyus-card-holder w-full">
             {data.map(item => (
               <div key={item._id} className="whyus-card">
                 <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${item?.image}`} 
                   alt={item.title}
                   className="whyus-icon"
                   width={2000}
                   height={2000}
                  
                 />
                 <h3 className="whyus-title">{item.title}</h3>
                 <p className="whyus-description">{item.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
  )
}
