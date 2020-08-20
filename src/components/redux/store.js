import { createStore } from "redux";
import studentReducer from "./studentReducer";

let initialState = [
  { id: 1, name: "John Doe", grade: 1, school: "React Redux School" },
  { id: 2, name: "Jane Doe", grade: 2, school: "React Redux School" },
  { id: 3, name: "Terry Adams", grade: 3, school: "React Redux School" },
  { id: 4, name: "Jenny Smith", grade: 4, school: "React Redux School" },
];

if (localStorage.getItem("students") === null)
  localStorage.setItem("students", JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem("students"));

const store = createStore(studentReducer, initialState);

export default store;
