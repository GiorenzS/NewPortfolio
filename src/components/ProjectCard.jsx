function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <h3>{project.title}</h3>

      <p>
        {project.description}
      </p>

      <div className="project-technologies">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      <a href={project.github}>
        View Project
      </a>

    </article>
  );
}

export default ProjectCard;