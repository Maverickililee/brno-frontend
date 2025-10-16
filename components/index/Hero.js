"use client"
import { motion } from "framer-motion";
import { FaArrowTurnUp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ data }) {
  if (!data || !data.length) return null;
  const hero = data[0];

  const decorativeImages = [
    'hero-img-2 left-0 w-[5%] max-md:w-[15%]  top-0',
    'hero-img-2 w-[7%] bottom-[-32px] max-md:w-[38%]  left-0',
    'hero-img-2 w-[8%] top-0 left-36',
    'hero-img-2 w-[5%] max-md:w-[18%]  top-0 right-0',
    'hero-img-2 w-[9%] top-0 left-[50%] ',
    'hero-img-2 w-[5%] max-md:w-[8%] bottom-0 right-0',
    'hero-img-2 w-[12%] bottom-0 left-96 max-md:hidden',
  ];
  const heroImg = "./rock.svg"; 
  return (
      <section id="hero" className="hero" aria-label="Hero section">
                     <Link href="/" className="page-logo">
          <Image src="/logo.svg" alt="Brno Web logo"  width={40} height={40} />
        </Link>
      <div className="hero-container ">
       
                         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hero-content"
        >
          <span className="hero-slogan">{hero.slogan}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <Link href="#contact" className="hero-btn">
              Contact Us <FaArrowTurnUp />
          </Link>
          </motion.div>
   
        <Image
          src="./rock.svg"
          width={800} // scaled down for performance
          height={800}
          alt="Hero illustration"          className="hero-img "
                    priority
        />


        {decorativeImages.map((className, idx) => (
          
          <Image
            key={idx}
            src={heroImg}
                    loading="lazy"
        width={200}
          height={200}        
             alt=""
                       className={className}
          />
        ))}

        {/* <div className="hero-Socials">
          <Link href={appinfo.instagram}>
            <Instagram className="hero-social-icon" />
          </Link>
          <Link href={appinfo.twitter}>
            <FaXTwitter className="hero-social-icon" />
          </Link>
          <Link href={appinfo.linkdin}>
            <Linkedin className="hero-social-icon" />
          </Link>
          <Link href={appinfo.telegram}>
            <FaTelegram className="hero-social-icon" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
