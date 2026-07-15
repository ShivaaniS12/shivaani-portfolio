import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
         <div className="space-y-10">

    <div>

        <p className="uppercase tracking-[0.3em] text-sm">
            CONTACT
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
            Let's Build Something
            Amazing Together.
        </h2>

    </div>

    <p className="text-lg max-w-2xl text-white/90">
        I'm currently open to Full Stack Development,
        AI Projects, Freelancing, Internships and
        Full-Time Opportunities.
    </p>

    <div className="space-y-5">

        <h3 className="text-2xl font-bold">
            📧 shivaaniis04@gmail.com
        </h3>

        <h3 className="text-2xl font-bold">
            📍 Bengaluru, India
        </h3>

    </div>

    <div className="flex flex-wrap gap-5">

        <a
            href="https://github.com/ShivaaniS12"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black rounded-full hover:scale-110 transition"
        >
            GitHub
        </a>

        <a
            href="https://www.linkedin.com/in/shivaani-s-2004ss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black rounded-full hover:scale-110 transition"
        >
            LinkedIn
        </a>

        <a
  href="/shivaani_resume.pdf"
  download="Shivaani_Resume.pdf"
  className="px-6 py-3 rounded-full bg-white text-black hover:bg-[#ff2a2a] hover:text-white transition"
>
  Download Resume
</a>
    </div>

    <a
  href="mailto:shivaaniis04@gmail.com?subject=Let's%20Connect&body=Hi%20Shivaani,%0A%0AI%20visited%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0A%0ARegards,"
  className="mt-10 inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
>
  Let's Connect →
</a>

</div>

         

        </div>
      </div>
    </section>
  );
};

export default Contact;
