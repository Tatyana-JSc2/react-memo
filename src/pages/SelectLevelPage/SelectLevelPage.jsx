import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useEffect, useState } from "react";
import { useTasks } from "../../context/hooks/useTasks";

export function SelectLevelPage() {
  const { lifes, setLifes, easy, setEasy } = useTasks();
  const [level, setLevel] = useState(null);
  const [unLevel, setUnLevel] = useState(false);
  const navigate = useNavigate();
  const children = "Играть";
  const [paths, setPaths] = useState(null);

  useEffect(() => {
    setLifes(1);
    setEasy(false);
  }, [SelectLevelPage]);

  const goToPlay = () => {
    //setUnLevel(false);
    if (level === 1) {
      setPaths(navigate("/game/3"));
    } else if (level === 2) {
      setPaths(navigate("/game/6"));
    } else if (level === 3) {
      setPaths(navigate("/game/9"));
    } else {
      setUnLevel(true);
    };
  };

  function selectLifes() {
    if (lifes === 1) {
      setLifes(3);
      setEasy(true);
    } else {
      setLifes(1);
      setEasy(false);
    };
  };

  console.log(lifes);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={unLevel === true ? styles.titleАttention : styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level} type="button" onClick={() => { setLevel(1); setUnLevel(false); }}>
            <p className={level === 1 ? styles.levelLinked : styles.levelLink}> 1 </p>
          </li>
          <li className={styles.level} type="button" onClick={() => { setLevel(2); setUnLevel(false); }}>
            <p className={level === 2 ? styles.levelLinked : styles.levelLink}> 2 </p>
          </li>
          <li className={styles.level} type="button" onClick={() => { setLevel(3); setUnLevel(false); }}>
            <p className={level === 3 ? styles.levelLinked : styles.levelLink}> 3 </p>
          </li>
        </ul>
        <div className={styles.checkbox}>
          <input type="checkbox" name="checkbox" onChange={(e) => selectLifes()} />
          <p className={easy === true ? styles.checkboxEasy : styles.checkboxHard}>Легкий режим (3 жизни)</p>
        </div>
        <button type="button" className={styles.button} onClick={goToPlay}>{children}</button>
      </div >

    </div >
  );
}
//{ Button({ children, goToPlay }) }