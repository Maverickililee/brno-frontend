import { FaArrowTurnUp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ data }) {
  console.log(data);

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
  <section className="hero">
             <Link href="/" className="page-logo">
          <Image src="/logo.svg" alt="loading..." width={40} height={40} />
        </Link>
      <div className="hero-container ">
       
        <div className="hero-content ">
          <span className="hero-slogan">{hero.slogan}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <Link href="/contact" className="hero-btn">
              Contact Us <FaArrowTurnUp />
          </Link>
        </div>

        <Image
          src="./rock.svg"
          width={2000}
          height={2000}
          alt="Hero image"
          className="hero-img"
        />

        {decorativeImages.map((className, idx) => (
          <Image
            key={idx}
            src={heroImg}
            width={2000}
            height={2000}
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
