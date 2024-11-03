import styles from "./scss/not-found.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </div>
  );
;}

export default NotFound;
