import Image from 'next/image';
import {  FaSearch } from 'react-icons/fa';

import {  FaLightbulb, FaPenFancy, FaCode, FaCheck, FaRocket } from "react-icons/fa6";


export default  function BlogDetailPage() {

const steps = [
  {
    title: "Discovery & Research",
    description:
      "We dive deep into your brand, audience, and competitors to understand your business and goals, ensuring a strong foundation for your project.",
    icon: <FaSearch size={24} />,
  },
  {
    title: "Strategy & Planning",
    description:
      "We define project scope, set timelines, and choose the best technologies to combine creativity with strategy for scalable solutions.",
    icon: <FaLightbulb />,
  },
  {
    title: "Design & Prototyping",
    description:
      "Our UX/UI designers craft wireframes and interactive prototypes, focusing on intuitive, accessible designs for seamless user experiences.",
    icon: <FaPenFancy size={24}  />,
  },
  {
    title: "Development & Implementation",
    description:
      "Our developers write clean, maintainable code and integrate cutting-edge technologies to deliver responsive, secure, and high-performance products.",
    icon: <FaCode size={24} />,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test every feature across devices and browsers, ensuring bug-free, responsive, and fully optimized solutions.",
    icon: <FaCheck size={24}  />,
  },
  {
    title: "Launch & Support",
    description:
      "We carefully deploy your project and provide ongoing support, updates, and optimization services to help your product grow.",
    icon: <FaRocket size={24} />,
  },
];


  return (
   <main className="w-full py-20 relative  bg-stone-100 ">
    <div className='w-[65%] max-lg:w-[80%] max-md:w-[90%]  mx-auto p-6 shadow-2xl rounded-4xl overflow-hidden service-shadow border-stone-300 border'>
              <Image
          src='/howwework.webp'
          alt='How We Work'
          width={2000}
          height={2000}
          priority
          className="w-full max-h-[520px]  rounded-4xl border border-stone-300"
        />
        <h4 className='how-title-mini mt-7'>
            Work Steps
        </h4>
      <h2 className="how-section-title">How We Work</h2>
 <p className="how-section-abstract mt-3">
          Our structured approach combines strategy, creativity, and technology to deliver results that make an impact. Here's how we bring your ideas to life:
        </p>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl cursor-pointer border group border-stone-300 shadow-md hover:shadow-xl duration-300 minh-[200px] transition flex flex-col gap-4"
            >
              <div className="flex items-center border border-stone-300 group-hover:bg-primary-100 group-hover:border-primary-100 group-hover:!text-white duration-500 justify-center w-12 h-12 bg-main/10  rounded-full">
                {step.icon}
              </div>
              <h3 className="font-semibold text-xl">{step.title}</h3>
              <p className="text-stone-500 font-medium leading-normal">{step.description}</p>
            </div>
          ))}
          </div>
    </div>

    </main>
  );
}
