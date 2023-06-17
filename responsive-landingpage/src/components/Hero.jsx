import React from 'react';
import images from '../assets/images'

const Hero = () => 
   (
    <section id="hero-section" className="my-16 flex flex-col flex-1 justify-center items-center">
<div className="max-w-[500px] ">
<img src={images.IllustrationIntro} alt="hero-image" className={`w-full object-fit`}/>

</div>



    </section>
  )


export default Hero