'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaList, FaX } from 'react-icons/fa6';

const Navbar = () => {
    const menu =[
        {
            href : "/",
            label:"Home"
        },
                                   {
            href : "/blogs",
            label:"Blogs"
        },                           {
            href : "how-we-work",
            label:"How We Work"
        },

    ]
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className=' fixed left-4 z-[99999999] top-4'>
      <button onClick={toggleSidebar} className="nav-shadow  ">
       <FaList  />
      </button>


      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-stone-100 border-r-2 border-stone-400  text-main p-6 z-40 transform transition-transform duration-300 ${
           !isOpen ?'translate-x-[-120%]' :
          'translate-x-0'
        }`}
      >
        <Link href="/" className="nav-logo mx-auto w-full flex items-center justify-center ">
          <Image src="/logo.svg" alt="loading..." width={60} height={80} />
        </Link>

 
        <nav className="  flex flex-col mt-4 w-full items-start">
            {menu?.map((i,index)=>(
                          <a key={index} href={i.href} className='w-full' >
    <span
      onClick={toggleSidebar}
      className="flex items-center relative border-t hover:bg-stone-200 border-stone-300 px-2 py-3 w-full transition-colors duration-300 group"
    >

      <span className="text-main group-hover:text-black-200">{i.label}</span>
    </span>
  </a>
            ))}

        </nav>
      </aside>

      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 bg-black   opacity-50 z-30" />}
    </div>
  );
};




export default Navbar;
