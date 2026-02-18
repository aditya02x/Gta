import React from 'react'

const Hero = () => {
  return (
    <>
    <section id='hero' className=''>
        <h1 className='title text-center text-white/60 text-9xl font-bold'>Mojito</h1>
          <div className="content">
                <div className='space-y-5 hidden md:block'>
                    <p className='text-3xl font-extrabold text-amber-300/80'>Cool Crisp Classic</p>
                </div>
            </div>

        <div className="leaf flex justify-between ">
            <img src="/images/hero-left-leaf.png" alt="" className='left-lea h-80 md:h-[100%] ' />

          

             <img src="/images/hero-right-leaf.png" alt="" className='left-lea mt-9 h-80 md:h-[100%] ' />

             <div className="content"></div>
        </div>

       

    </section>
    </>
  )
}

export default Hero
