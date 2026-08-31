import { skills } from '../constants/skills';
import SkillCard from '../components/SkillCard';

function About() {
  return (
    <section id="about" className="about">

      <div className="section-heading">
        <p>Get to know me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <p>
          I'm an IT student passionate about software
          development and technology.
        </p>

        <p>
          I enjoy building projects that allow me to
          apply what I've learned and improve my skills.
        </p>

      </div>

      <div className="section-heading">
        <p>What I work with</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-list">

        {skills.map((skill) => (
          <SkillCard key={skill} name={skill} />
        ))}

      </div>

    </section>
  );
}

export default About;