import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../animationVariants";

function Background() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}       // animation states (initial, in, out)
      initial="initial"             // start state
      animate="in"                  // animate to visible
      exit="out"                    // exit animation
      transition={pageTransition}   // timing for animation
    >
      <div className="page-content">
        <h1>My Education</h1>
        <p>I graduated in December of 2024 with my A.A.S degree from Volunteer State Community College.</p>
        <p>I studied Computer Information Technology with my concentration in Computer Programming</p>
        <p>Now I am working on my B.S. in Computer Scince with my Minor in Data Science at Randolph College.</p>
        <h1>Work History</h1>
        <p>Currently I am a Student Assistant at the Randolph College IT Help Desk.</p>
        <p>As well as an Intern Student Researcher for the SUPERMinDS project. </p>
        <p>Previsouly, I worked for Ascesion Healthcare where I was an Application Portfolio Management Intern.</p>
      </div>
    </motion.div>
  );
}

export default Background;
