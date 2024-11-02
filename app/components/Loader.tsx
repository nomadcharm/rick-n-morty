import styles from "../scss/loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
