import Image from "next/image";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container">
        
        <div className="footer-logo-holder">
          <div className="flex items-center gap-4">
          <Image
          src="/logo.svg"
          alt="brnoweb logo"
          width={2000}
          height={2000}
          className="w-11 "
          />

          <h2 className="footer-logo-title">Brno Web</h2>
          </div>

        </div>

        <nav className="footer-nav">
          <a href="/" className="footer-nav-item">Home</a>
          <a href="/blogs" className="footer-nav-item">Blogs</a>
          <a href="/how-we-work" className="footer-nav-item">How We Work</a>
        </nav>

        <div className="footer-social">
          <a href="https://t.me/TheOneAndOnlyMaverick" aria-label="telegram" className="footer-social-item">
<FaTelegram/>          </a>

     <a href="https://www.linkedin.com/in/iliya-keyhani-7b62b7362" aria-label="linkedin" className="footer-social-item">
<FaLinkedinIn/>          </a>
        </div>
      </div>
                <p className="footer-logo-des">&copy; {new Date().getFullYear()} Brno Web. All rights reserved.</p>

    </footer>
  )
}
