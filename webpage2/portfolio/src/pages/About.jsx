import { motion } from "framer-motion";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import cssLogo from "../assets/css.png";
import javaLogo from "../assets/java.png";
import htmllogo from "../assets/html.png";
import pythonlogo from "../assets/python.png";
import sqllogo from "../assets/sql.png";
import cpplogo from "../assets/cpp.png";

const skills = [
  {name : "HTML", img : htmllogo},
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  {name : "Java", img: javaLogo},
  {name : "Python", img: pythonlogo},
  {name : "C++", img: cpplogo},
  {name : "SQL", img: sqllogo}
  
];

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <p>I'm a student developer learning modern web development with React.</p>

      <h3>My Skills</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={skill.img} alt={skill.name} className="skill-img" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;