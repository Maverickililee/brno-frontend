"use client"
import { motion } from "framer-motion";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.';
        if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
        }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty.';

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
                if (!validate()) {
      return;
    }


    setStatus('Sending...');
        setLoading(true);

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
        setStatus('✅ Message sent! We’ll contact you within 24 hours.');
                setFormData({ name: '', email: '', message: '' });
            setErrors({});
  
    } else {
        setStatus(`❌ ${data.message || 'Something went wrong, try again later.'}`);      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('❌ Error sending message, please try again.');  
      }
      finally {
      setLoading(false);
    }
  };
      
  return (
      <section className='contact' id="contact" aria-label="Contact Brno Web">        <div className='contact-section  '>
                  <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-4"
        >
                  <h2 className='contact-section-title '>
            Contact Our Team
        </h2>
        <p className='contact-section-abstract '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos dolorem sapiente tempore numquam soluta nemo, commodi excepturi rem et quasi repellat aliquam provident suscipit expedita, repudiandae enim alias a.
      </p>
      </motion.div>
 <form className='contact-card ' onSubmit={handleSubmit} >

      <div className=' contact-grid'>
   <div className='contact-item'>
        <label htmlFor="name" className='contact-label'>Full Name</label>
        <input
          type="text"
                        id="name"
          name="name"
          className='contact-input'
          value={formData.name}
          placeholder='eg. Hugh Scott'
          onChange={handleChange}
          required
                        aria-invalid={!!errors.name}
        />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
   <div className='contact-item'>
        <label htmlFor="email" className='contact-label'>Email</label>
        <input
          type="email"
                        id="email"
          name="email"
                    className='contact-input'

          placeholder='eg. example@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
                        aria-invalid={!!errors.email}
        />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      </div>
   

   <div className='contact-item'>
        <label htmlFor="message"  className='contact-label'>Your Message:</label>
        <textarea
                      rows="5"
          type="text"
          name="message"
                        aria-invalid={!!errors.message}
    placeholder="Type your message here..."
          style={{  resize: "none",
}}
          
          value={formData.message}
                              className='contact-textarea '

          onChange={handleChange}
          required
        />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <div className='contact-error'>
      <p className='contact-text'>
- All fields are mandatory!
      </p>
               <p className='contact-text'>
– Our team responds within 24 hours after successful submission
      </p>
 

      </div>

      <button className=" contact-btn hover:shadow-lg"             disabled={loading} type="submit">            {loading ? 'Sending...' : 'Submit'}</button>
      <p className='contact-status w-full text-center font-semibold text-lg mt-3'>{status}</p>
    </form>

        </div>

    </section>
   
  );
}
