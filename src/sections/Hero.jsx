import heroImage from '../assets/image.jpg';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p>Hello, I'm</p>

        <h1>IT Student & Developer</h1>

        <p>
          I create web applications and software while
          continuously developing my skills.
        </p>

        <div className="hero-actions">
          <a href="#projects">
            View Projects
          </a>

          <a href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Your Name"
        />
      </div>
    </section>
  );
}

export default Hero;