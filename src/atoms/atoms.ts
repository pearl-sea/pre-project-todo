import { atom } from "recoil";
import { Todo } from "../types/types";

export const todoState = atom<Todo[]>({
  key: "todoState",
  default: [],
});
