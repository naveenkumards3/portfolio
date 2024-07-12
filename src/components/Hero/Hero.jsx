import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naveen Kumar D S</h1>
        <p className={styles.description}>
          i'm a passionate React developer with a knack for building dynamic and
          responsive web applications.
        </p>
        <a href="mailto:naveends8228@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
    </section>
  );
};
export default Hero;
