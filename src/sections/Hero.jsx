import heroImage from '../assets/image.jpg';

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:your@email.com', icon: '✉' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com', icon: '◉' },
];

function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex w-full max-w-6xl flex-col items-center gap-5 sm:gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

        {/* Image Section */}
        <div className="relative mt-5 w-full shrink-0 max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[420px]">

          {/* Shadow */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-500" />

          {/* Image Container */}
          <div className="relative border-2 border-[#222] bg-[#f5f5f2] p-3 sm:p-4">

            {/* Image */}
            <div className="relative aspect-[9/10] overflow-hidden border border-[#333] sm:aspect-[4/5]">
              <img src={heroImage} alt="Gio.S - IT Student & Developer" className="h-full w-full object-cover" />
            </div>

            {/* Social Links */}
            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="flex items-center justify-center gap-1 rounded border border-[#777] bg-[#f5f5f2] px-1.5 py-2 text-[10px] font-medium text-[#222] transition-colors duration-200 hover:bg-[#222] hover:text-white sm:gap-1.5 sm:px-2 sm:text-xs">
                  <span aria-hidden="true">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>

          </div>

          {/* Corner Accents */}
          <span className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-[#222]" />
          <span className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-[#222]" />
          <span className="absolute -bottom-3 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#222]" />
          <span className="absolute -bottom-3 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#222]" />

        </div>

        {/* Text Content */}
       <div className="flex w-full flex-1 flex-col items-center text-center lg:items-start lg:text-left">

          {/* Name */}
          <h1 className="text-4xl leading-tight tracking-tight text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="font-name">Giorenz</span>{' '}
            <span className="font-normal">Sanguillosa</span>
          </h1>

          {/* Title */}
          <h2 className="mt-2 text-xl font-medium leading-tight tracking-tight text-[#222] sm:text-2xl md:text-3xl lg:text-5xl">
            Aspiring Backend Developer
          </h2>

          {/* Description */}
         <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:text-lg lg:mx-0 lg:text-left">
            I create web applications and software, drawing on hands-on
            project experience to continuously strengthen my back-end and
            database management skills.

            <br />
            <br />

            Right now, I am still currently studying and learning more about
            back-end development, but I am also open to exploring front-end
            development and other areas of software development.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <a href="#projects" className="w-full rounded-full bg-[#222] px-6 py-3 text-center font-medium text-white transition-transform duration-200 hover:scale-105 sm:w-auto">
              View Projects
            </a>

            <a href="#contact" className="w-full rounded-full border border-[#222] bg-transparent px-6 py-3 text-center font-medium text-[#222] transition-transform duration-200 hover:scale-105 sm:w-auto">
              Contact Me
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

