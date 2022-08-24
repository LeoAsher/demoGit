import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { items, deleteItem, onChangeBox } = props;
  // console.log(items);
  return (
    <div className="list">
      {items.map((it) => (
        <TodoItem
          key={it.id}
          items={it}
          deleteItem={deleteItem}
          onChangeBox={onChangeBox}
        ></TodoItem>
      ))}
    </div>
  );
}
