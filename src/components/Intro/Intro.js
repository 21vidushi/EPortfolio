import React from 'react'
import './Intro.css'
import bg from '../../assets/ME.jpeg'
import btnImg from '../../assets/hireme.png';


const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'> Hello </span>
        <span className='introText'> I'm <span className='introName'>Vidushi Singhal</span> <br></br> Web Developer</span>
        <p className='introPara'> A enthusiastic person with a passion for turning ideas into interactive digital experiences. </p>
        <a href='https://drive.google.com/file/d/19T0IhqNb4KTrXf_96XhdaaaP-j13d7HF/view?usp=sharing' ><button className='btn'> <img src={btnImg} alt='' className='btnImg'></img> Resume Download</button> </a>
        </div>
        <img src={bg} alt='' className='bg'></img>
    </section>
  )
}

export default Intro