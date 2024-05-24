import { createContext, useState } from "react";


export const TasksContext = createContext();


export const TasksProvider = ({ children }) => {
    const [lifes, setLifes] = useState(1);

    const[easy, setEasy]=useState(false);
    

    return <TasksContext.Provider value={{ lifes, setLifes, easy, setEasy }}>
        {children}
    </TasksContext.Provider>;
};
