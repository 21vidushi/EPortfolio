import React from 'react'
import './works.css'
import HTML from '../../assets/html.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/javascript.png';
import REACT from '../../assets/React.png';
import C from '../../assets/c++F.png';
import Mongo from '../../assets/mongofinal.png';


const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'> Skills</h2>
       <span className='worksDesc'>I have developed proficiency in the following skills.
</span>
       <div className='worksImgs'>
        <img src={HTML} className='worksImg' alt=''></img>
        <img src={CSS} className='worksImg' alt=''></img>

        <img src={JS} className='worksImg' alt=''></img>
        <img src={REACT} className='worksImg' alt=''></img>
        <img src={C} className='worksImg' alt=''></img>
        <img src={Mongo} className='worksImg' alt=''></img>

       </div>
    </section>
  )
}

export default Works