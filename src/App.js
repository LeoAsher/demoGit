import React from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm";

const todos = [
  { id: 1, name: "Uchiha Madara", isDone: false },
  { id: 2, name: "Uchiha Obito", isDone: false },
  { id: 3, name: "Uchiha Shisui", isDone: false },
  { id: 4, name: "Uchiha Itachi", isDone: false },
  { id: 5, name: "Uchiha Sasuke", isDone: false },
];
function App() {
  const [items, setItems] = React.useState(todos);
  const addTodo = (name) => {
    setItems((items) => {
      const id =
        items.length > 0
          ? items.reduce((max, ele) => (max.id > ele.id ? max : ele)).id + 1
          : 1;
      const todo = { id: id, name: name, isDone: false };
      return [todo, ...items];
    });
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
