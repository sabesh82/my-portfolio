import React from "react";
import RevealOnScroll from "./../RevealOnScroll";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const frontendSkills = [
    "NextJS",
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Python",
  ];
  const backendSkills = ["NextJS", "MongoDB", "Prisma", "SQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-25 md:py-27"
    >
      <RevealOnScroll>
        <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white inline-block text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="rounded-xl p-6 border-white/10 border ">
            <p className="text-justify  text-gray-400 mb-6 hover:text-gray-300 transition duration-300">
              A web developer focused on crafting clean, scalable, and efficient
              web applications. Experienced with modern tools like Next.js,
              React, and TypeScript. Passionate about continuous learning and
              problem-solving, with growing interests in artificial intelligence
              (AI) and cloud computing to build smarter, more powerful digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6  transition-all">
              <h3 className="font-bold mb-4 text-2xl">FrontEnd Skills</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 transition-all">
              <h3 className="font-bold mb-4 text-2xl">BackEnd Skills</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/*Education*/}
            <div className="p-6 rounded-xl border-white/10">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.SC in Computer Science</strong> - Eastern University
                  Sri Lanka (2021-2024)
                </li>
                <li>GPA: Pending</li>
                <li>
                  Nasriya Central College, Chilaw.
                  <br /> G.C.E. Advanced Level &ndash; Physical Science (Maths,
                  Physics, Chemistry)
                </li>
              </ul>
            </div>
            {/*work*/}
            <div className="p-6 rounded-xl border-white/10">
              <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="font-semibold">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Full-Stack Developer Intern at KIFGO (Pvt) Ltd (2025)
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
