import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <section id='educations'>
       <span className='educationTitle'> Education </span>
    <div className='eduBars' >
        <div className='eduBar'>
           <div className='eduBartext'>
            <h2 className='pro'>Graduation</h2>
            <div className='edup'>Pursuing B.TECH from KIET Group of Institution specialiized in Computer Science and Engineering, Delhi NCR with overall CGPA of 8.86</div>
           </div>
        </div>
        <div className='eduBar'>
           <div className='eduBartext'>
            <h2 className='pro'>Senior Secondary School</h2>
            <div className='edup'>Completed Intermediate from N.R Public School, Khurja in Physics, Chemistry and Maths with overall 97%</div>
           </div>
        </div>
        <div className='eduBar'>
           <div className='eduBartext'>
            <h2 className='pro'>High School</h2>
            <div className='edup'>Completed High School from N.R Public School, Khurja with overall 96%</div>
           </div>
        </div>
        
    </div>

    </section>
  )
}

export default Education