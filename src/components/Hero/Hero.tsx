import styles from "./Hero.module.scss";
import avatar from "../../assets/pic-2-removebg.png";
import html_img from "../../assets/html_img-removebg-preview.png"
import css_img from "../../assets/css-img-removebg-preview.png";
import js_img from "../../assets/js_img-removebg-preview.png";
import sass_img from "../../assets/sass_img-removebg-preview.png";
import ts_img from "../../assets/ts_img.jpg";
import react_img from "../../assets/react_img-removebg-preview.png";


const Hero: React.FC = () => {
  return (
    <section id="Hero" className={`${styles.Hero} section`}>
      <div className={`${styles.Hero__wrapper} wrapper`}>
        <div className={styles.Hero__content_div}>
          <h2 className={styles.Hero__content_div__head_text}>
            Hello, I'm Jessica Cruise
          </h2>

          <p className={styles.Hero__content_div__desc}>
            Front end developer based in Lagos, Nigeria. With the use of front
            end technologies I build beautiful and seamless User Interfaces,
            creat and bringing complex ideas and innovations to reality.
          </p>

          <div className={styles.Hero__skills_container}>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={html_img} alt="Html logo" />
            </span>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={css_img} alt="Css logo" />
            </span>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={js_img} alt="Js logo" />
            </span>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={react_img} alt="React logo" />
            </span>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={sass_img} alt="Sass logo" />
            </span>
            <span className={styles.Hero__skills_container__skills_span}>
              <img src={ts_img} alt="Typescript logo" />
            </span>
          </div>
        </div>
        <div className={styles.Hero__banner_graphics}>
          <div className={styles.Hero__banner_graphics__img_container}>
            <img
              className={styles.Hero__banner_graphics__img}
              src={avatar}
              alt="Avatar for the portfolio website"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
