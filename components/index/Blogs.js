"use client"
import EmblaCarousel from '../global/EmblaCarousel'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link'
import { FaArrowRight, FaClock } from 'react-icons/fa6'


function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date; // difference in milliseconds

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 7) {
    // If older than a week, show full date
    const parts = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).split(" ");
    return `${parts[0]} ${parts[1]} - ${parts[2]}`;
  } else if (days >= 2) {
    return `${days} days ago`;
  } else if (days === 1) {
    return `yesterday`;
  } else if (hours >= 1) {
    return `${hours} hours ago`;
  } else if (minutes >= 1) {
    return `${minutes} minutes ago`;
  } else {
    return `just now`;
  }
}


function BlogCard({ i }) {
  return (
       <div className="blog-slide embla__slide ">
                      <Image
    src={`${process.env.NEXT_PUBLIC_API_URL}${i?.image}`} 
                        className="blog-image"
                        alt={i.title}
                        width={500}
                        height={300}
                      />
                      <div className="blog-card">
                        <h2 className="blog-card-title">{i.title}</h2>
                        <p className="blog-description">{i.description}</p>
                        <span className="blog-time">
                          <FaClock className="blog-time-icon" />
                          {i.time} min read - {timeAgo(i.createdAt)}
                        </span>
                  <Link href={`/blog/${i.link}`} className="blog-readmore ">
                          Read Article <FaArrowRight size={18} />
                        </Link>
                      </div>
                    </div> );
}


export default function Blogs({data}) {
  




      const reversedData = [...data].reverse();
      
    
  return (
      <section className='blogs' id="blogs" aria-label="Recent blog posts">          
             <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
className='flex flex-col items-start w-[90%] mx-auto'>
    <h4 className='blogs-title-mini'>
      Blogs
    </h4>
        <h2 className="blogs-section-title "> Our Latest Article</h2>
        <p className="blogs-section-abstract mt-3 ">
Discover insights, trends, and tips from our experts. Our blog dives into Web3, design, and full-stack development, helping you stay ahead in the ever-evolving digital world.        </p>
        <Link href={'/blogs'} className="blogs-section-link">
 View all blogs
 <FaArrowRight/>

</Link>          </motion.div>

      <div className="blogs-container ">
 
          <EmblaCarousel  >
            {reversedData?.map((i)=>(
                <BlogCard key={i._id} i={i} />

            ))}
    
     </EmblaCarousel>

     
      </div>
    </section>
  )
}
