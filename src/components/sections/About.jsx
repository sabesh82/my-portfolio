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
  ];
  const backendSkills = ["NextJS", "MongoDB", "Prisma", "SQL(basic)"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-1 md:py-27"
    >
      <RevealOnScroll>
        <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white inline-block text-transparent bg-clip-text">
            About Me
          </h2>

          <div className="rounded-xl p-4 border-white/10 border ">
            <p className="text-justify text-sm md:text-lg text-gray-400 mb-6 hover:text-gray-300 transition duration-300">
              I&apos;m a Software Engineer passionate about creating
              user-friendly and scalable web applications. I enjoy working with
              technologies like React, Next.js, TypeScript, JavaScript, and
              MongoDB to build clean, efficient, and maintainable code. I excel
              in teamwork, communication, problem-solving, time management, and
              adaptability, thriving in agile environments and leveraging tools
              like Slack and Jira for collaboration, project tracking, and
              sprint planning. Always eager to learn new technologies, I focus
              on delivering solutions that make a real impact.
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
                  <br /> G.C.E. Advanced Level &ndash; Physical Science <br />
                  (Maths, Physics, Chemistry)
                </li>
              </ul>
            </div>
            {/*work*/}
            <div className="p-6 rounded-xl border-white/10">
              <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="font-semibold">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Software Engineer Intern at KIFGO (Pvt) Ltd (2025)</li>
                  </ul>
                </h4>
              </div>
            </div>
            {/*certifications*/}
            <div className="p-6 rounded-xl border-white/10">
              <h3 className="text-2xl font-bold mb-4">Certificates</h3>
              <div className="space-y-4 text-gray-300">
                <h4 className="font-semibold">
                  <ul className="list-disc list-inside text-purple-200 space-y-2">
                    <li>
                      {" "}
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/YNU1M314LOIS"
                        target="_"
                        className="underline text-sm md:text-base"
                      >
                        Introduction to Cloud Computing (Issued by IBM)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cert.devtown.in/verify/13PFVB"
                        target="_"
                        className="underline text-sm md:text-base"
                      >
                        Introduction to Front-End Development (DevTown)
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        href="https://www.sololearn.com/en/certificates/CC-RTPRPQ6T"
                        target="_"
                        className="underline text-sm md:text-base"
                      >
                        Generative AI in Practice (Issued by Sololearn)
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.sololearn.com/en/certificates/CC-KIHJVX0C"
                        target="_"
                        className="underline text-sm md:text-base"
                      >
                        Prompt Engineering (Issued by Sololearn)
                      </a>{" "}
                    </li>
                    <li>
                      <a
                        href="https://www.sololearn.com/en/certificates/CC-KYRB0VZO"
                        target="_"
                        className="underline text-sm md:text-base"
                      >
                        Introduction to LLMs (Issued by Sololearn){" "}
                      </a>
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
