import styles from "./Works.module.scss";
import bg_1 from "../../assets/bg-7.jpeg"
import bg_2 from "../../assets/bg-5.jpg";
import bg_3 from "../../assets/bg-6.jpeg";
import bg_4 from "../../assets/bg-4.jpg";
// import bg_4 from "../../assets/bg-4.jpg";


const Works: React.FC = () => {
  return (
    <section id="Works" className={`${styles.Works} section`}>
      <div className={`${styles.Works__wrapper} wrapper`}>
        <div className={styles.Works__head_div}>
          <h2 className={`${styles.Works__head_div__head_text} text-center`}>
            My works
          </h2>
          <p className={`${styles.Works__head_div__desc} text-center`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            pariatur, consequuntur illo totam est obcaecati.
          </p>
        </div>

        <div className={styles.Works__items_container}>
          <div
            className={`${styles.Works__items_container__item} ${styles.card_medium}`}
          >
            <img src={bg_1} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_small}`}
          >
            <img src={bg_2} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_medium}`}
          >
            <img src={bg_3} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_small}`}
          >
            <img src={bg_4} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_medium}`}
          >
            <img src={bg_4} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_large}`}
          >
            <img src={bg_4} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_small}`}
          >
            <img src={bg_4} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_large}`}
          >
            <img src={bg_4} alt="" />
          </div>

          <div
            className={`${styles.Works__items_container__item} ${styles.card_medium}`}
          >
            <img src={bg_4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
