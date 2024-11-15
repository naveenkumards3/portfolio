import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/mern-logo.jpg")}
          alt="mernImage"
          className={styles.mernImage}
        />
        <div className={styles.aboutItems}>
          <h2 className={styles.reactTitle}>FullStack Developer</h2>
          <p className={styles.description}>
            Enthusiastic Full Stack Developer with a focus on the MERN stack
            (MongoDB, Express.js, React.js, Node.js). Expert in building dynamic
            and scalable web applications that deliver seamless user
            experiences. Skilled in both frontend and backend development, API
            integration, and performance optimization. Passionate about
            continuous learning and implementing cutting-edge technologies.
            Experienced in delivering high-quality projects within agile
            environments. Ready to take on new challenges and collaborate on
            impactful web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
