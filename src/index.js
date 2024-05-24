import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { TasksProvider } from "./context/tasks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
    <RouterProvider router={router}></RouterProvider>
    </TasksProvider>
  </React.StrictMode>,
);
