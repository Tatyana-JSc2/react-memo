import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { TasksProvider } from "./context/tasks";
import { ListProvider } from "./context/list";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <ListProvider>
        <RouterProvider router={router}></RouterProvider>
      </ListProvider>
    </TasksProvider>
  </React.StrictMode>,
);
