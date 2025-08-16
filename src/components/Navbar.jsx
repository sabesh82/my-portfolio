import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-19">
        {/*logo*/}
        <div className="flex gap-1 items-center text-2xl font-bold cursor-pointer">
          My Portfolio
        </div>

        {/*mobile button*/}
        <button
          className=" absolute p-2 md:hidden top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuopen)}
        >
          {isMenuopen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/*navlinks*/}
        <div className="hidden md:flex space-x-5 items-center">
          {navlinks.map((link, key) => (
            <a
              key={key}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text:lg font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                          hover:after:w-full after:bg-purple-700 after:transition-all ${
                            activeLink === link.href
                              ? "text-purple-300 after:w-full"
                              : "text-white"
                          }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/*mobile menu*/}
      <div>
        {isMenuopen && (
          <div className="md:hidden border border-white/20 bg-gradient-to-b from-gray-900 to-transparent py-10 text-center text-lg">
            <div className="max-w-6xl mx-auto px-4 space-y-5">
              {navlinks.map((link, key) => (
                <a
                  key={key}
                  href={link.href}
                  onClick={() => {
                    setIsMenuOpen(false), setActiveLink(link.href);
                  }}
                  className="block text-md font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
