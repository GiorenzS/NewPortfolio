function Navbar() {
  return (
    <nav className="fixed -mt-2.75 left-1/2 z-50 w-280 -translate-x-1/2 p-4">
      
      <div className="flex items-center justify-between rounded-full bg-[#111111] p-3.5 shadow-lg">

        <a
          href="#home" className="text-white ml-6 no-underline inline-block transition-transform duration-200 hover:scale-115">
          <span className="text-lg font-medium">
            Gio.S
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex ">

          <a
            href="#about"
            className="relative text-20px text-white inline-block transition-transform hover:opacity-65 duration-35 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>

          <a
            href="#projects"
            className="relative text-20px text-white inline-block transition-transform hover:opacity-65 duration-35 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="relative text-20px text-white inline-block transition-transform hover:opacity-65 duration-35 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </a>

        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#ffffff] px-4 py-1.5 text-20 text-black transition-transform duration-200 hover:scale-105"
        >
          Contact Me
        </a>

      </div>

    </nav>
  );
}

export default Navbar;