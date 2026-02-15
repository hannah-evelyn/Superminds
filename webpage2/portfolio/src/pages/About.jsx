import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import cssLogo from "../assets/css.png";

const skills = [
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "CSS", img: cssLogo },
];

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <p>I'm a student developer learning modern web development with React.</p>

      <h3>My Skills</h3>
            <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;