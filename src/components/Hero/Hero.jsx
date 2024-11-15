import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naveen Kumar D S</h1>
        <p className={styles.description}>
          I'm a passionate Full Stack Developer specializing in the MERN stack
          (MongoDB, Express.js, React.js, Node.js). With a strong foundation in
          web development and a knack for solving complex problems, I thrive on
          creating dynamic and engaging web applications.
        </p>
        <a href="mailto:naveends8228@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/naveen.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
    </section>
  );
};
export default Hero;
