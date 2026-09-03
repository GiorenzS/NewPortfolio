import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 z-60 w-full transition-all duration-300 lg:left-1/2 lg:w-[calc(100%-1rem)] lg:max-w-255.5 lg:-translate-x-1/2 ${isMenuOpen ? 'p-0 lg:p-2' : 'p-2'}`}>
       <div className={`flex items-center justify-between p-2.5 transition-all duration-300 ${isMenuOpen ? 'rounded-none border-b border-black/25 bg-white shadow-none lg:rounded-full lg:border lg:border-black/25 lg:bg-white/50 lg:shadow-lg lg:backdrop-blur' : 'rounded-full border border-black/25 bg-white/50 shadow-lg backdrop-blur'}`}>
          {/* Logo */}
          <a href="#home" className={`ml-4 inline-block no-underline duration-300 transition-transform hover:scale-115 lg:ml-6 ${isMenuOpen ? 'text-black' : 'text-black'}`}>
            <span className="text-xl font-logo">
              Gio.S
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-9">
            <a href="#about" className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>

            <a href="#projects" className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>

            <a href="#experience" className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:after:w-full">
              Experience
            </a>
          </div>

          {/* Desktop Contact */}
          <a href="#contact" className="mr-2 hidden rounded-full bg-[#111111] px-4 py-1.5 text-[16px] text-white transition-transform duration-500 hover:scale-105 lg:inline-block">
            Contact Me
          </a>

          {/* Mobile Menu Button */}
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex h-10 w-10 items-center justify-center lg:hidden" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-black transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />            </div>
          </button>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-[rgb(255,255,255)] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >

        <div className="flex min-h-screen flex-col items-center justify-center gap-8">

          <a
            href="#about"
            onClick={closeMenu}
            className="text-3xl font-medium text-black transition-opacity duration-300 hover:opacity-60"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="text-3xl font-medium text-black transition-opacity duration-300 hover:opacity-60"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
            className="text-3xl font-medium text-black transition-opacity duration-300 hover:opacity-60"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 rounded-full bg-white px-7 py-3 text-xl font-medium text-black transition-transform duration-200 hover:scale-105"
          >
            Contact Me
          </a>

        </div>

      </div>
    </>
  );
}

export default Navbar;