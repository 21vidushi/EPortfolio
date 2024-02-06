import React,{useRef} from 'react'
import './contact.css'
import LinkedinIcon from '../../assets/linkedin.png'
import GitIcon from '../../assets/github2.png'
import EmailIcon from '../../assets/emailf.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fm99ecz', 'template_cgohvur', form.current, 'QCtknHjV4zYUSsxRA')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!!");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
    <div id='contact'>
         <h2 className='contactPageTitle'>Contact Me</h2>
         <span className='contactDesc'>Please fill the form below to discuss any work</span>
         <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            <textarea  className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button  type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                 <a href='https://www.linkedin.com/in/vidushi-singhal-ba3980226/'><img src={LinkedinIcon} alt='' className='link'></img></a>
               <a href='https://github.com/21vidushi'> <img src={GitIcon} alt='' className='link'></img></a>
                <a href='mailto:svidushi184@gmail.com'><img src={EmailIcon} alt='' className='link'></img></a>
               <a href='https://www.instagram.com/its_vidsinghal_/'> <img src={InstagramIcon} alt='' className='link'></img></a>

            </div>

         </form>
    </div>
    </section>
  )
}
