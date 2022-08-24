import React from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";

const todos = [
  { id: 1, name: "Uchiha Madara", isDone: false },
  { id: 2, name: "Uchiha Obito", isDone: false },
  { id: 3, name: "Uchiha Shisui", isDone: false },
  { id: 4, name: "Uchiha Itachi", isDone: false },
  { id: 5, name: "Uchiha Sasuke", isDone: false },
];
function App() {
  const [items, setItems] = React.useState(todos);
  const deleteItem = (it) =>
    setItems((items) => items.filter((ele) => ele.id !== it.id));
  const onChangeBox = (it) =>
    setItems((items) =>
      items.map((ele) =>
        ele.id === it.id ? { ...ele, isDone: !ele.isDone } : ele
      )
    );
  return (
    <>
      <div className="App">
        <TodoList
          items={items}
          deleteItem={deleteItem}
          onChangeBox={onChangeBox}
        ></TodoList>
      </div>
    </>
  );
}

export default App;
