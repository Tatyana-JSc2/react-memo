import { createContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [lifes, setLifes] = useState(1);

  const [easy, setEasy] = useState(false);
  const [level, setLevel] = useState(null);

  return (
    <TasksContext.Provider value={{ lifes, setLifes, easy, setEasy, level, setLevel }}>
      {children}
    </TasksContext.Provider>
  );
};
