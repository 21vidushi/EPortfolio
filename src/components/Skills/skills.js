import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'


const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'> Projects </span>
    <span className='skillDesc'>These projects center around web development, incorporating HTML, CSS, and JavaScript, complemented by the MERN stack for robust backend functionality. </span>
    <div className='skillBars' >
        <div className='skillBar'>
           <img src={UIDesign} alt='' className='skillBarImg'></img>
           <div className='skillBartext'>
            <h2 className='prodesc'>Password Generator</h2>
            <div className='skillp'>Designed a random password generator including uppercase,lowercase,symbols and numbers.
               Used JavaScript asynchronous functions to call random number and map it with alphabets,symbol.</div>
           </div>
        </div>
        <div className='skillBar'>
           <img src={WebDesign} alt='' className='skillBarImg'></img>
           <div className='skillBartext'>
            <h2 className='prodesc'>Media Uploader</h2>
            <div className='skillp'>The Media Upload feature facilitates the uploading of content to the Cloudinary platform, serving as an online repository for media storage. This functionality encompasses the storage of images, videos, and compressed images. Additionally, it supports local file storage directly on the server.</div>
           </div>
        </div>
        
    </div>

    </section>
  )
}

export default Skills