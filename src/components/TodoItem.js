import { useEffect } from "react";

export default function TodoItem(props) {
  const { item, deleteItem, onChangeBox } = props;

  // useEffect(() => {
  //   console.log("ahihi");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []); // dependencies array

  return (
    <div className="list-item">
      <input
        type="checkbox"
        onChange={() => onChangeBox(item)}
        checked={item.isDone}
      />
      <div
        className="item-name"
        style={{ textDecoration: item.isDone ? "line-through" : null }}
      >
        {item.name}
      </div>
      <button onClick={() => deleteItem(item)} className="delete-btn">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
