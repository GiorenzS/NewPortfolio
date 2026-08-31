import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed left-1/2 top-0 z-50 hidden w-[calc(100%-1rem)] max-w-255.5 -translate-x-1/2 p-2 lg:block">

       <div className="flex items-center justify-between rounded-full border border-black/25 bg-white/50 p-2.5 backdrop-blur shadow-lg">

          {/* Logo */}
          <a
            href="#home"
            className="ml-6 inline-block text-black no-underline transition-transform duration-200 hover:scale-115"
          >
            <span className="text-xl font-medium">
              Gio.S
            </span>
          </a>


          {/* Navigation */}
          <div className="flex items-center gap-6 xl:gap-9">

            <a
              href="#about"
              className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>

            <a
              href="#projects"
              className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="relative inline-block text-[18px] text-black transition-opacity duration-300 hover:opacity-65 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Experience
            </a>

          </div>


          {/* Contact */}
          <a
            href="#contact"
            className="mr-2 rounded-full inline-block bg-[#111111] px-4 py-1.5 text-[16px] text-white transition-transform duration-500 hover:scale-105"
          >
            Contact Me
          </a>

        </div>

      </nav>


      {/* ============================= */}
      {/* MOBILE / TABLET MENU BUTTON */}
      {/* ============================= */}

      <div className="fixed right-4 top-4 z-60 lg:hidden">

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-12 w-12 items-center justify-center"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >

          <div className="flex flex-col gap-1.5">

          <span
            className={`block h-0.5 w-5 transition-all duration-300 ${
              isMenuOpen
                ? 'bg-white translate-y-2 rotate-45'
                : 'bg-black'
            }`}
          />
          <span
            className={`block h-0.5 w-5 transition-all duration-300 ${
              isMenuOpen
                ? 'bg-white opacity-0'
                : 'bg-black'
            }`}
          />

          <span
            className={`block h-0.5 w-5 transition-all duration-300 ${
              isMenuOpen
                ? 'bg-white -translate-y-2 -rotate-45'
                : 'bg-black'
            }`}
          />

          </div>

        </button>

      </div>


      {/* ============================= */}
      {/* FULL SCREEN MOBILE MENU */}
      {/* ============================= */}

      <div
        className={`fixed inset-0 z-50 bg-[#111111] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >

        <div className="flex min-h-screen flex-col items-center justify-center gap-8">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="mb-8 text-3xl font-medium text-white"
          >
            Gio.S
          </a>


          {/* About */}
          <a
            href="#about"
            onClick={closeMenu}
            className="text-3xl font-medium text-white transition-opacity duration-300 hover:opacity-60"
          >
            About
          </a>


          {/* Projects */}
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-3xl font-medium text-white transition-opacity duration-300 hover:opacity-60"
          >
            Projects
          </a>


          {/* Experience */}
          <a
            href="#experience"
            onClick={closeMenu}
            className="text-3xl font-medium text-white transition-opacity duration-300 hover:opacity-60"
          >
            Experience
          </a>


          {/* Contact */}
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