import styles from "./ListElement.module.css";

export function ListElement({ number, name, time }) {
  return (
    <div className={styles.listElement}>
      <p className={styles.pathsElement}>{number}</p>
      <p className={styles.pathsElement}>{name}</p>
      <p className={styles.pathsElement}>{time}</p>
    </div>
  );
}
