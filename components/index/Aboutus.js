import Image from 'next/image'
export default function Aboutus({data}) {
    

      const about = data[0];
      
      
  return (
    <div id='about' className="aboutus ">
        <div className="aboutus-container">
            {about &&
                      <Image
            width={2000}
            height={2000}
            alt='aboutus'
            className='aboutus-image'
    src={`${process.env.NEXT_PUBLIC_API_URL}${about?.image}`} 
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
  
        </div>
    </div>
  )
}
