import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm";
import Clock from "./components/Clock";
import axios from "axios";
import axiosInstance from "./api/axiosInstance";

const todos = [
  { id: 1, name: "Uchiha Madara", isDone: false },
  // { id: 2, name: "Uchiha Obito", isDone: false },
  // { id: 3, name: "Uchiha Shisui", isDone: false },
];
function App() {
  const [items, setItems] = React.useState(todos);

  const addTodo = (name) => {
    const newTodo = {
      id: Date.now(),
      name,
      isDone: false,
    };
    setItems([...items, newTodo]);
  };

  const deleteItem = (it) => {
    console.log(items.filter((ele) => ele.id !== it.id));
    setItems((items) => items.filter((ele) => ele.id !== it.id));
  };

  const completeItem = (it) =>
    setItems((items) =>
      items.map((ele) =>
        ele.id === it.id ? { ...ele, isDone: !ele.isDone } : ele
      )
    );

  useEffect(() => {
    const fetch = async () => {
      try {
        const url = "/";
        const response = await axiosInstance.get(url);
        console.log("response: ", response);
      } catch (err) {
        console.log("errror: ", err);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />

        <TodoList
          items={items}
          deleteItem={deleteItem}
          completeItem={completeItem}
        ></TodoList>
      </div>
    </>
  );
}

export default App;
