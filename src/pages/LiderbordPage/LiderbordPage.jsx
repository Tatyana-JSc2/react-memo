import { useNavigate } from "react-router-dom";
import styles from "./LiderbordPage.module.css";
import { Button } from "../../components/Button/Button";
import { ListElement } from "../../components/ListElement/ListElement";
import { useList } from "../../context/hooks/useList";

export function LiderbordPage() {
  const navigate = useNavigate();
  const { list, timeFormat } = useList();

  function StartPlay() {
    navigate("/");
  }

  let num = 0;
  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <div className={styles.header}>
          <div className={styles.head}>
            <p className={styles.previewDescription}>Лидерборд</p>
          </div>
          <Button onClick={StartPlay}>Начать игру</Button>
        </div>

        <div className={styles.list}>
          <div className={styles.listElement}>
            <p className={styles.pathsElement}>Позиция</p>
            <p className={styles.pathsElement}>Пользователь</p>
            <p className={styles.pathsElement}>время</p>
          </div>
          {list
            .sort((a, b) => a.time - b.time)
            .map(el => (
              <ListElement key={el.id} number={(num += 1)} name={el.name} time={timeFormat(el.time)} />
            ))}
        </div>
      </div>
    </div>
  );
}
