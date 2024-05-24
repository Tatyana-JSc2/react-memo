import { useContext } from "react";
import { TasksContext } from "../tasks";


export function useTasks() {
    return useContext(TasksContext);  
}