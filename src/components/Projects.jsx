import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

import kultstyleVideo from "../assets/projectVideos/kultstyle.mp4";

import irrigationVideo from "../assets/projectVideos/smart-irrigation.mp4";

const projectVideos = {
  
  KultStyle: kultstyleVideo,

  "Smart Irrigation": irrigationVideo
};

const TagCard = ({
  number,
  title,
  text,
  tech,
  github,
  onClick,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer =
      cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

   return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-80 rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-700 hover:-translate-y-3 hover:scale-[1.03] z-10 cursor-default ${className}
      ${
        isActive
          ? "bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]"
          : "bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
      }`}
    > {/* Hole Punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full absolute top-4 border border-gray-300 flex justify-center items-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
     <div
        className={`w-full rounded-[1.5rem] mt-8 p-8 transition-all duration-700 ${
          isActive ? "bg-red-700/50" : "bg-[#f4f4f4]"
        }`}
      >
        <span
          className={`text-xl font-bold italic ${
            isActive ? "text-red-100" : "text-gray-400"
          }`}
        >
          {number}
        </span>
        
       <div className="mt-3">
          <span
            className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              isActive
                ? "bg-white text-red-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            Project
          </span>
        </div>
        
        <h3
          className={`text-3xl font-black mt-4 ${
            isActive ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-4 leading-relaxed ${
            isActive ? "text-red-100" : "text-gray-500"
          }`}
        >
          {text}
        </p>


        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map((item) => (
            <span
              key={item}
              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-red-50 border border-red-200 text-red-600"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <hr
          className={`my-6 ${
            isActive ? "border-white/20" : "border-gray-200"
          }`}
        />

        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className={`flex-1 py-3 rounded-xl font-bold transition ${
              isActive
                ? "bg-white text-red-600 hover:bg-red-100"
                : "bg-black text-white hover:bg-[#ff2a2a]"
            }`}
          >
            ▶ Watch Demo
          </button>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 rounded-xl flex items-center justify-center transition ${
              isActive
                ? "border border-white text-white hover:bg-white hover:text-red-600"
                : "border border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-white pt-24 pb-64 px-6 md:px-12 relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
     <div className="max-w-6xl mx-auto relative md:h-[1550px]">
        
               <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-2 text-sm font-bold bg-white shadow-sm">
            Featured Projects
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-8 leading-tight">
            Projects That Turned
            <br />
            Ideas Into Reality
          </h2>

          <p className="mt-8 text-gray-500 text-lg leading-relaxed">
            Every project reflects my passion for creating scalable,
            user-focused and innovative software solutions using modern
            technologies.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
               <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <mask id="path-mask">
            <motion.path
              d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M650,200 C400,300 200,400 300,600 C400,800 750,750 700,950 C650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

      

        {/* Cards Container */}
       <div className="flex flex-col gap-10 md:block relative z-10">
          <TagCard
  number="01"
  title="SUVAIO"
  text="AI-powered food delivery platform with nutrition tracking, restaurant management and real-time ordering experience."
  tech={[
    "Java",
    "JSP",
    "Servlet",
    "MySQL",
    "React",
  ]}
  github="https://github.com/ShivaaniS12/SUVAIO"
 onClick={() => alert("Demo video coming soon!")}
  className="md:absolute md:top-[10px] md:right-[8%] rotate-3"
  aosType="fade-left"
  aosDelay="100"
  pathLength={pathLength}
  containerRef={containerRef}
/>
          

        <TagCard
  number="02"
  title="KultStyle"
  text="Modern fashion e-commerce platform featuring product browsing, shopping cart and responsive shopping experience."
  tech={[
    "HTML",
    "JavaScript",
    "CSS",
    "SQL",
    "Java"
  ]}
  github="https://github.com/ShivaaniS12/KultStyle"
  onClick={() =>
    setSelectedVideo(projectVideos["KultStyle"])
  }
  className="md:absolute md:top-[420px] md:left-[8%] -rotate-3"
  aosType="fade-right"
  aosDelay="200"
  pathLength={pathLength}
  containerRef={containerRef}
/>

        <TagCard
  number="03"
  title="Skin Cancer Detection"
  text="Deep Learning based AI application that predicts skin cancer from dermoscopic images with intelligent image analysis."
  tech={[
    "Python",
    "TensorFlow",
    "CNN",
    "OpenCV",
  ]}
  github="https://github.com/ShivaaniS12"
 onClick={() => alert("Demo video coming soon!")}
  className="md:absolute md:top-[760px] md:right-[10%] rotate-2"
  aosType="fade-left"
  aosDelay="300"
  pathLength={pathLength}
  containerRef={containerRef}
/>

         <TagCard
  number="04"
  title="Smart Irrigation"
  text="IoT based smart irrigation system that automates watering using soil moisture sensors and cloud monitoring."
  tech={[
    "Arduino",
    "ESP8266",
    "IoT",
    "Sensors",
  ]}
  github="https://github.com/ShivaaniS12"
  onClick={() =>
    setSelectedVideo(projectVideos["Smart Irrigation"])
  }
  className="md:absolute md:top-[1080px] md:left-[20%] -rotate-2"
  aosType="fade-right"
  aosDelay="400"
  pathLength={pathLength}
  containerRef={containerRef}
/>

          {/* Hand-drawn end text */}
         <div
  data-aos="fade-up"
  data-aos-delay="500"
  className="hidden md:block absolute top-[1270px] left-[60%] text-3xl text-gray-500 italic rotate-6"
>
  More projects coming soon...
</div>

        </div>

      </div>
{selectedVideo && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-6">

    <button
      onClick={() => setSelectedVideo(null)}
      className="absolute top-8 right-8 text-white text-5xl hover:text-[#ff2a2a] transition"
    >
      ×
    </button>

    <video
      src={selectedVideo}
      controls
      autoPlay
      className="w-full max-w-6xl rounded-3xl shadow-[0_0_80px_rgba(255,255,255,0.15)]"
    />

  </div>
)}

    </section>
  );
};
export default Projects;
