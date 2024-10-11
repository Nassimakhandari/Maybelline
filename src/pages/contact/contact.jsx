import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xqzpves', 'template_60vf14z', form.current, {
          publicKey: 'gd3PeyPA7DcAgU_yD',
        })
        .then(
          () => {
            alert('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <>
      <div className='bg-black text-white w-[50vw] flex flex-col gap-10 p-16 mx-auto mt-10 rounded-xl '>
        <h1 className='font-bold text-center text-5xl'>Contact-Us</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 items-center justify-center">
            <label htmlFor="" className=''>Full Name</label>
          <input className="ps-5 border w-[40vw] h-12 rounded-md" type="text" name='Full name' placeholder="Full name" />
          <input className="ps-5 border w-[40vw] h-12 rounded-md" type="email" name='Email' placeholder="Enter your email" />
          <textarea className="ps-5  h-32 w-[40vw] rounded-md " placeholder="Message" name='Message'></textarea>
          <button className="bg-white text-black font-bold text-center py-2 px-20 rounded-full text-xl">Send</button>
        </form>
      </div>
    </>
    );
};

export default Contact;