import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useTasks } from "../../context/hooks/useTasks";
import { useList } from "../../context/hooks/useList";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postList } from "../../api";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { easy, level } = useTasks();
  const { list, setList } = useList();
  const [setError] = useState(null);
  const navigate = useNavigate();

  const title = isWon ? (winTime() && "Вы попали на Лидерборд!") || "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [newList, setNewList] = useState({
    name: "пользователь",
    time: "",
  });

  function winTime() {
    if (easy === false && level === 3) {
      const timeSecond = gameDurationMinutes * 60 + gameDurationSeconds;
      const Lid = list.filter(el => el.time > timeSecond);
      if (Lid.length > 0) {
        return true;
      }
      return false;
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    const postNewList = { ...newList, time: gameDurationMinutes * 60 + gameDurationSeconds };
    await postList({ ...postNewList })
      .then(data => {
        //throw new Error("Ошибка сервера");
        setList(data.leaders);
        //console.log(data.leaders);
        navigate("/liderbord");
      })
      .catch(err => {
        setError(err.message);
      });
  };

  //{winTime() && <Link to={handleSubmit}><p className={styles.linkText}>Перейти к лидерборду</p></Link>}
  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {winTime() && (
        <input
          className={styles.input}
          onChange={e => setNewList({ ...newList, name: e.target?.value })}
          type="text"
          placeholder="Пользователь"
        />
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>{(winTime() && "Играть снова") || "Начать сначала"}</Button>
      {winTime() && (
        <Link className={styles.linkText} onClick={handleSubmit}>
          Перейти к лидерборду
        </Link>
      )}
    </div>
  );
}
