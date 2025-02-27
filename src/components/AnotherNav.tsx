import { useState } from "react";
const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/production" },
  { name: "Products", href: "/product" },
  { name: "Business", href: "/wholesaler" },
  { name: "Contact", href: "/contact" },
];
const Navbar = ({ animate = false }: { animate?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className="bg-gradient-to-r from-slate-800/50 to-slate-900/50   transition-all duration-300 h-24 bg-opacity-50 
      absolute top-0 left-0 w-full z-20 backdrop-blur-sm
    "
      >
        {/* Relative for absolute positioning of logo */}
        <div className="container flex items-center justify-between h-full  ">
          {/* Logo Container (Left) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <div
              data-aos={animate && "slide-right"}
              className="bg-gradient-to-tr from-slate-200 to-white via-white 
            rounded-br-[2000px] p-2 flex items-center py-5 pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-36 2xl:pl-44 pr-20 sm:pr-24 md:pr-28 lg:pr-32 xl:pr-36 2xl:pr-40 shadow transition-all duration-300 ease-in-out z-10"
            >
              <img
                onClick={() => (window.location.href = "/")}
                src="/logo.webp"
                data-aos-delay="100"
                data-aos={animate && "fade-right"}
                alt="Green Agri Corp Logo"
                className="h-16 sm:h-18 xl:h-[70px]  transition-all duration-500 ease-in-out "
              />
            </div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="hidden lg:flex ml-auto items-end h-full *:px-5  *:transition-all *:duration-500 *:ease-in-out">
            {links.map((link) => (
              <a
                // tabIndex={-1}
                key={link.name}
                data-astro-prefetch
                href={link.href}
                className="text-gray-300 pt-12 hover:bg-slate-300/40 h-full hover:text-white transition duration-300 ease-in-out
                active:bg-slate-400/40 active:text-white
                focus:outline-none
              "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden flex ml-auto items-center h-full *:px-5  *:transition-all *:duration-500 *:ease-in-out">
            <button
              className="focus:outline-none
            hover:bg-slate-300/40
            h-full
            "
              onClick={() => setIsOpen(!isOpen)}
              id="burger"
              aria-label="Main Menu"
              aria-haspopup="true"
              aria-controls="menu"
              aria-expanded="false"
            >
              <svg
                className="h-10 w-10 text-gray-300 hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="
        fixed top-0 left-0 w-full h-full bg-slate-900 
        lg:hidden 
        z-50
        overflow-hidden
      "
        >
          <button
            className="absolute top-12 right-12 text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Mobile Menu Content */}
          <div className="flex flex-col items-center justify-center h-full">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 text-2xl py-2 hover:bg-slate-300/40 hover:text-white transition duration-300 ease-in-out
              active:bg-slate-400/40 active:text-white
            "
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
