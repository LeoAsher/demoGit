import React, { useEffect, useRef, useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null); // reference

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  const onChange = (e) => {
    setInput(inputRef.current.value);
  };

  useEffect(() => {
    console.log("hihi");

    return () => {
      console.log("unmount");
    };
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        ref={inputRef}
        value={input}
        onChange={onChange}
        className="todo-input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todo-button">
        Add todo
      </button>
    </form>
  );
}
