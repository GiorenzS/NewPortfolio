import { skills } from '../constants/skills';
import SkillCard from '../components/SkillCard';

function About() {
  return (
    <section id="about" className="min-h-screen px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-20">

        {/* About */}
        <div className="flex flex-col justify-center -mt-20">
          <div className="section-heading text-left text-7xl font-semibold text-[#111111] sm:text-5xl md:text-6xl lg:text-7xl">
            <h1 className="!text-[12vw] sm:!text-[5vw] md:!text-[10vw] lg:!text-[6vw] whitespace-nowrap inline-block">
              A<span className="font-design text-inherit">BOU</span>T
            </h1>
            <h2 className="text-[15px] tracking-wide text-[#111111] text-right">
              --   {"{"}"HELLO WORLD"{"}"}
            </h2>
          </div>

          <div className="about-content">
            <p className="mt-20 max-w-xl text-center text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:text-lg lg:mx-0 lg:text-left">
              I'm an IT student passionate about software development and technology.
            </p>

            <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base md:text-lg lg:mx-0 lg:text-left">
              I enjoy building projects that allow me to apply what I've learned and improve my skills.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col justify-center">
       <div className="section-heading mt-10 ext-right font-semibold text-[#111111] leading-[0.8] tracking-tighter overflow-hidden lg:text-left">
          <h1 className="!text-[12vw] sm:!text-[5vw] md:!text-[10vw] lg:!text-[6vw] whitespace-nowrap inline-block">
            ST<span className="font-design text-inherit">AC</span>K
          </h1>
        </div>
         <div className="mt-8 flex flex-col gap-8">
            <div>
              <h2 className="mb-4 text-left text-[15px] tracking-wide text-[#999999]">FRONTEND</h2>
              <div className="flex flex-wrap justify-start gap-2.5">
                {skills.frontend.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-left text-[15px] tracking-wide text-[#999999]">BACKEND</h2>
              <div className="flex flex-wrap justify-start gap-2.5">
                {skills.backend.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;