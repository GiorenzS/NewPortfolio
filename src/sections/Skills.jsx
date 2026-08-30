import { skills } from '../constants/skills';
import SkillCard from '../components/SkillCard';

function Skills() {
  return (
    <section id="skills" className="skills">

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

export default Skills;