import { useContext } from "react";
import { ListContext } from "../list";

export function useList() {
  return useContext(ListContext);
}
