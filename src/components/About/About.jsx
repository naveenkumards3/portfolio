import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/reactLogo.png")}
          alt="reactImage"
          className={styles.reactImage}
        />
        <div className={styles.aboutItems}>
          <h2 className={styles.reactTitle}>React Developer</h2>
          <p className={styles.description}>
            I am a passionate React developer with a strong background in
            building dynamic and responsive web applications.I specialize in
            leveraging React's powerful capabilities to create seamless user
            experiences. My expertise includes JavaScript (ES6+), HTML, CSS, and
            various modern libraries and frameworks such as Redux, ReduxToolKit,
            Bootstrap, Figma, npm for Package Manager, and GitHub for version
            control. I thrive on solving complex problems and continuously
            strive to enhance my skills by staying up-to-date with the latest
            industry trends and technologies. Let's connect and create something
            amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
