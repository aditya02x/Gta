import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Navbar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top'
            }
        })
        navTween.fromTo('nav',{backgroundColor:'transparent'},{
            backgroundColor:'#00000050',
            backgroundFilter:'blur(10px)',
            duration:1,
            ease:"power1.inOut"

        });

    })
  return (
    <nav className="w-full py-6">
      <div className="container mx-auto px-5">
        
        {/* Wrapper */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col md:flex-row items-center gap-2 text-3xl font-modern-negra"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-8 w-auto"
            />
            <p>Velvet Pour</p>
          </a>

          {/* Links */}
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm uppercase tracking-wider">
            <li><a href="#about">About</a></li>
            <li><a href="#cocktails">Cocktails</a></li>
            <li><a href="#art">The Art</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;