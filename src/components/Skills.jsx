import React from "react";

const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS"
  ],

  Backend: [
    "Java",
    "JSP",
    "Servlet",
    "Spring Boot",
    "Hibernate"
  ],

  Database: [
    "MySQL"
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Eclipse",
    
  ],

  AI: [
    "Python",
    "TensorFlow",
    "OpenCV"
  ],

  Cloud: [
    "Cloudflare",
    "Netlify",
    "Vercel"
  ]
};

const Skills = () => {
  return (

    <section
      id="skills"
      className="bg-black py-28 px-6 md:px-12"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-black text-center text-white">
    Skills
</h2>

<p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
    Technologies I use to build modern web applications,
    AI solutions and scalable backend systems.
</p>

<div className="mt-20 space-y-16">

{
Object.entries(skills).map(([category,items])=>(
<div key={category}>

<h3 className="text-2xl font-bold text-red-500 mb-8">

{category}

</h3>

<div className="flex flex-wrap gap-4">

{
items.map(skill=>(
<div

key={skill}

className="px-6 py-3 rounded-full border border-red-500 text-white hover:bg-red-500 hover:scale-110 transition duration-300 cursor-pointer"

>

{skill}

</div>
))
}

</div>

</div>
))
}

</div>

      </div>

    </section>

  );
};

export default Skills;