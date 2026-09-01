import heroImage from '../assets/image.jpg';

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:your@email.com', icon: '✉' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com', icon: '◉' },
];

function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="flex w-full max-w-5xl flex-col items-center gap-16 lg:flex-row lg:justify-between">
        
        {/* Image Section */}
        <div className="relative w-full max-w-[420px] shrink-0">
          
          {/* Shadow Layer */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-500" />

          {/* Image Container */}
          <div className="relative border-2 border-[#222] bg-[#f5f5f2] p-4">
            
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden border border-[#333]">
              <img
                src={heroImage}
                alt="Gio.S - IT Student & Developer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Social Links */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center gap-1.5 rounded border border-[#777] bg-[#f5f5f2] px-2 py-2 text-xs font-medium text-[#222] transition-colors duration-200 hover:bg-[#222] hover:text-white"
                >
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
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-medium tracking-tight text-[#222] md:text-6xl">
            IT Student &amp; Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
            I create web applications and software while continuously developing my skills.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-[#222] px-6 py-3 font-medium text-white transition-transform duration-200 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#222] bg-transparent px-6 py-3 font-medium text-[#222] transition-transform duration-200 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;