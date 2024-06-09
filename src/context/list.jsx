import { createContext, useEffect, useState } from "react";
import { getList } from "../api";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  function timeFormat(time) {
    return `${Math.floor(time / 60)
      .toString()
      .padStart(2, 0)}:${(time - Math.floor(time / 60) * 60).toString().padStart(2, 0)}`;
  }

  // console.log(list);

  useEffect(() => {
    getList()
      .then(data => {
        //throw new Error("Ошибка сервера");
        setList(data.leaders);
        //console.log(data.leaders);
      })
      .catch(err => {
        //setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        //setIsLoading(false);
      });
  }, []);

  return <ListContext.Provider value={{ list, setList, timeFormat }}>{children}</ListContext.Provider>;
};
