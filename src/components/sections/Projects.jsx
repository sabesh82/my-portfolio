import React from "react";
import RevealOnScroll from "./../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-27"
    >
      <RevealOnScroll>
        <div className="flex flex-col items-center max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-white inline-block text-transparent bg-clip-text">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/20 flex flex-col  bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                Inventory Management System
              </h3>
              <p className="text-gray-400 mb-2">
                A full-stack inventory management system for laboratories with
                real-time alert features.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "NextJs",
                  "TypeScript",
                  "MongoDB",
                  "Prisma",
                  "React",
                  "TailwindCSS",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/inventory-management-system"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                coffee-shop full-stack site
              </h3>
              <p className="text-gray-400 mb-2">
                A full-stack coffee shop platform where users can sign in,
                explore the menu, add items to cart ,etc.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "NextJs",
                  "TypeScipt",
                  "Tailwind CSS",
                  "MongoDB",
                  "React",
                  "prisma",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/coffee-site-fullstack"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">Blog App</h3>
              <p className="text-gray-400 mb-2">
                A full-stack web application for creating blogs with secure
                registration and login functionalities
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "NextJs",
                  "TypeScript",
                  "MongoDB",
                  "Tailwind CSS",
                  "React",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/My_blog_App"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                Chat application (reading)
              </h3>
              <p className="text-gray-400 mb-2">
                A real-time chat application enabling users to securely send and
                receive messages with instant updates.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "NextJs",
                  "TypeScript",
                  "ConvexDB",
                  "Tailwind CSS",
                  "Clerk",
                  "Shadcn/UI",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="py-8 px-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                Spotify-Clone
              </h3>
              <p className="text-gray-400 mb-2">
                A React-based music player with custom controls, seek bar, and
                dynamic audio playback.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/Spotify-Clone-App"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="py-8 px-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                Food-Delivery site
              </h3>
              <p className="text-gray-400 mb-2">
                A responsive, dark-themed front-end site for a food delivery
                service, featuring menu highlights, smooth layout,
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/Foodizo-food-delivery-site"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="py-8 px-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                Educational Org site
              </h3>
              <p className="text-gray-400 mb-2">
                A responsive front-end site with a clean layout to present
                educational content and essential information.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "TypeScript", "Tailwind CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/educational-org-site"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>

            <div className="py-8 px-6 rounded-xl border border-white/20 flex flex-col bg-gradient-to-b from-gray-900 to-transparent hover:scale-102 transform duration-200">
              <h3 className="text-xl md:text-2xl mb-2 font-bold">
                E-Commerce site
              </h3>
              <p className="text-gray-400 mb-2">
                A static e-commerce site showcasing products with a visually
                appealing layout and design.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "JavaScript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabesh82/E-Commerce-frontend-site"
                  className="text-purple-200 hover:text-purple-300 transition-colors my-4"
                  target="_"
                >
                  View Project→
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
