import { createContext, useEffect, useState } from "react";
import { getList } from "../api";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList()
      .then(data => {
        //throw new Error("Ошибка сервера");
        setList(data.leaders);
        console.log(data.leaders);
      })
      .catch(err => {
        //setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        //setIsLoading(false);
      });
  }, []);

  return <ListContext.Provider value={{ list, setList }}>{children}</ListContext.Provider>;
};
