'use client'; // if you're using Next.js App Router

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});


  
  const validate = () => {
    const newErrors = {};

      if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
         if (!formData.message.trim()) newErrors.message = 'Message is required';


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
        setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        setStatus('');

            if (!validate()) {
      return;
    }
    setStatus('Sending...');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Your message has been received. Our support team will contact you in less than 24 hours.!');
        setFormData({ name: '', email: '', message: '' });
            setErrors({});
  
    } else {
        setStatus(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message');
    }
  };
      
  return (
    <div id='contact' className='contact'>
        <div className='contact-section  '>
                  <h2 className='contact-section-title '>
            Contact Our Team
        </h2>
        <p className='contact-section-abstract '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos dolorem sapiente tempore numquam soluta nemo, commodi excepturi rem et quasi repellat aliquam provident suscipit expedita, repudiandae enim alias a.
      </p>
 <form className='contact-card ' onSubmit={handleSubmit} >

      <div className=' contact-grid'>
   <div className='contact-item'>
        <label className='contact-label'>Full Name:</label>
        <input
          type="text"
          name="name"
          className='contact-input'
          value={formData.name}
          placeholder='eg. Hugh Scott'
          onChange={handleChange}
          required
        />
      </div>
   <div className='contact-item'>
        <label className='contact-label'>Email:</label>
        <input
          type="email"
          name="email"
                    className='contact-input'

          placeholder='eg. example@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      </div>
   

   <div className='contact-item'>
        <label className='contact-label'>Your Message:</label>
        <textarea
        
          type="text"
          name="message"
    placeholder="Type your message here..."
          style={{  resize: "none",
}}
          
          value={formData.message}
                              className='contact-textarea '

          onChange={handleChange}
          required
        />
        
      </div>
      <div className='contact-error'>
      <p className='contact-text'>
- All fields are mandatory!
      </p>
               <p className='contact-text'>
- After a success submit our support team will contact you in less than 24 hour.
      </p>
              {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      </div>

      <button className=" contact-btn hover:shadow-lg" type="submit">Submit</button>
      <p className='contact-status w-full text-center font-semibold text-lg mt-3'>{status}</p>
    </form>

        </div>

    </div>
   
  );
}
