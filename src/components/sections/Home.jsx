import RevealOnScroll from "./../RevealOnScroll";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mt-5 md:mt-2"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source
          src="https://res.cloudinary.com/dlseuftkj/video/upload/v1752233826/galaxy_codwki.mp4"
          type="video/mp4"
        />
      </video>
      <RevealOnScroll>
        <div className="text-center max-w-7xl mx-auto z-10 px-4 flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="w-full max-w-7xl mx-auto px-2 md:w-2/3">
            <h1 className="text-[38px] md:text-[5.5rem] font-bold mb-6 bg-gradient-to-r from-purple-400 to-white  text-transparent bg-clip-text">
              Hi, I'm Sabesh
            </h1>
            <p className="text-justify  text-gray-400 text-[1.045rem] mb-8 max-w-lg mx-auto hover:text-gray-300 transition duration-300">
              I specialize in building scalable web applications using modern
              technologies like JavaScript, TypeScript, React, and Next js. I
              love turning ideas into efficient, user-friendly software, and I'm
              always exploring new tools to improve my craft.
            </p>

            <div className="flex justify-center space-x-4 mb-5">
              <a
                href="#projects"
                className="bg-purple-500 text-white px-2 py-1 md:py-2 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(249,168,212,0.4)] "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-purple-500/50 text-purple-500 px-2  py-1  md:py-2 md:px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249,168,212,0.4)] hover:bg-purple-400/11"
              >
                Contact me
              </a>
            </div>

            <div className="flex gap-3 cursor-pointer justify-center mt-5">
              <a href="https://github.com/sabesh82" target="_">
                <FaGithub className="size-9 hover:scale-104 transform duration-100 hover:text-purple-200" />
              </a>
              <a href="https://www.linkedin.com/in/sabesh82/" target="_">
                <FaLinkedin className="size-9 hover:scale-104 transform duration-100 hover:text-purple-200" />
              </a>
            </div>
          </div>

          <div className="hidden md:block w-full max-w-sm h-[400px] mb-20">
            <Spline scene="https://prod.spline.design/i9OLLrrEDFq7uTX7/scene.splinecode" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
