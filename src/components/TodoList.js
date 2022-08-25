import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { items, deleteItem, completeItem } = props;
  // console.log(items);
  return (
    <div className="list">
      {items.map((it) => (
        <TodoItem
          key={it.id}
          item={it}
          deleteItem={deleteItem}
          onChangeBox={completeItem}
        ></TodoItem>
      ))}
    </div>
  );
}
