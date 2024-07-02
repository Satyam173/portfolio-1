import React from "react";
import profilepic from "../assets/profilepic.png";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


const Hero = () => {
    useGSAP(()=>{
        gsap.from('.box',{
            x:-300,
            duration:0.7
        })
        gsap.from('.box2',{
            x:300,
            duration:1.2
        })
        gsap.to('.box3',{
            scale:1.1,
            duration:1,
            repeat:-1,
            yoyo:true,
            ease:'power1.inOut'
        })
    })
  return (
    <div className="main overflow-hidden">
      <div className="content border-b border-neutral-900 pb-4 lg:mb-35 text-white">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ml-6">
              <h1  className="box pb-16 text-6xl font-extralight tracking-tighter lg:mt-16 lg:text-7xl">
                <i>Satyam Mohanty</i>
              </h1>
              <span className="box2 box3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tacking-tight text-transparent">
                MERN Stack Developer
              </span>
              <p className="box2 mt-5 font-thin tracking-tight ">
                I am a dedicated and versatile MERN stack developer with a
                passion for creating efficient and user-friendly web
                applications. I have worked with a variety of technologies,
                including React, Node.js, MySQL, Express.js and MongoDB. My
                journey in web development began with a deep curiosity for how
                things work, and it has evolved into a career where I
                continuously strive to learn and adapt to new challenges. I
                thrive in collaborative environments and enjoy solving complex
                problems to deliver high-quality solutions. Outside of coding, I
                enjoy staying active, exploring new technologies, and
                contributing to open-source projects.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <div className="w-full max-w-xs lg:max-w-sm">
                <img className="box2 rounded-2xl" src={profilepic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
