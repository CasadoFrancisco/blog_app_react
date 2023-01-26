import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <span className={styles.titleSmall}>React & Node</span>
        <span className={styles.titleLarge}>NEWS</span>
      </div>
      <img
        className={styles.image}
        src="https://media.cdn.eldestapeweb.com/eldestape/032021/1617121909540/soldados_argentinos_guerra_islas_malvinas.webp?cw=1280&ch=720&extw=jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
