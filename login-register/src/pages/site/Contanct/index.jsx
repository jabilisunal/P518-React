import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
   
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_g67iv7p', 'template_u57nqln', form.current, {
            publicKey: 'rbUZ45hOyEw1Jymib',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
      <div>
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
       <div>
       <label>Email</label>
       <input type="email" name="user_email" />
       </div>
      <div>
      <label>Message</label>
      <textarea name="message" />
      </div>
        <input type="submit" value="Send" />
      </form>

     
    </>
  );
};

export default Contact;
