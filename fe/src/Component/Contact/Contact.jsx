import React, { useState,useRef } from 'react'
import "./Contact.scss"
import emailjs from '@emailjs/browser';
import {AiOutlineSend} from 'react-icons/ai';

function Contact() {
  const inputRef = useRef();
  const [value, setValue] = useState({
     name:'',
     user_email:'',
     message:'',
  });
  const handleValue  = (e) => {
     setValue((valuee) => ({
        ...valuee,
        [e.target.name]: e.target.value,
     }))
  };
  const handleContactForm = (e) => {
    e.preventDefault();
    emailjs.send('service_cjpv9fj', 'template_1inkq2p', value, 'znPCi33ATrILN43C1')
      .then((result) => {
        console.log('sucsses',result.text);
      }, 
      (error) => {
        console.log('Failed',error.text);
      });
      setValue("");
      inputRef.current.focus(); 
  };
  const handleEnter = (e) => {
    if(e.code == "Enter"){
      handleContactForm();
    }
}

  return (
    <>
     <div className='Contact flex flex-col' id='contact'>
      <p className='Contact__title '>Contact</p>
      <div className="Contact__form ">
         <form className='flex flex-col'  onSubmit={handleContactForm}>
          <h1 className='Contact__form__title'>Contact Form</h1>
          <div className="Contact__input">
             <label>Name</label>
             <input 
             className='Contact__name'
             type='text'
             name="name"
             placeholder='Your name'
             onChange={handleValue}
             ref={inputRef}
             onKeyDown={(e) => handleEnter (e)}
             ></input>
          </div>

          <div className='Contact__input'>
             <label>Email</label>
             <input 
             className='Contact__email'
             type='email'
             name='user_email'
             placeholder='Your email address'
             onChange={handleValue}
             ref={inputRef}
             onKeyDown={(e) => handleEnter (e)}
             ></input>
          </div>

          <div className="Contact__summit">
             <label>Message</label>
             <textarea
             className='Contact__message'
              name='message'
              rows='4'
              placeholder='Type your message'
              onChange={handleValue}
              ></textarea>
              <div className="Contact__btn">
                <input
                type='submit'
                value='Send'
                >
                </input>
                <AiOutlineSend className='send__icon'></AiOutlineSend>
              </div>
          </div>

         </form>

         <div className='Contact__Info flex flex-col'>
             <div className="Contact__item flex  flex-row">
                 <a href="tel:+861205874" className='Contact__item_done'>
                   <div className="Contact__icon">
                      <i className="fas fa-phone"></i>
                   </div>
                      <a href="tel:+84961205874">+84961205874</a>
                 </a>
             </div>
             <div className="Contact__item flex  flex-row">
               <a href="mailto:yotobequan@gmail.com" className='Contact__item_done'>
                <div className="Contact__icon">
                   <i className="fa-regular fa-at"></i> 
                </div>         
                  <a href='mailto:yotobequan@gmail.com'>yotobequan@gmail.com</a>        
               </a>
             </div>

             <div className="Contact__item flex  flex-row">
               <div className='Contact__item_done'>
                  <div className="Contact__icon">
                   <i className="fa-sharp fa-solid fa-location-dot"></i>
                  </div>
                   <a> Ngủ Hành Sơn - Đà Nẵng </a>         
               </div>
             </div>        
         </div>

      </div>
     </div>
    </> 
  )
}

export default Contact