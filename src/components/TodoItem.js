export default function TodoItem(props) {
    const { items, deleteItem, onChangeBox } = props;
    return (
      <div key={items.id} className="list-item">
        <input
          type="checkbox"
          onChange={() => onChangeBox(items)}
          checked={items.isDone}
        />
        <div
          className="item-name"
          style={{ textDecoration: items.isDone ? "line-through" : null }}
        >
          {items.name}
        </div>
        <button onClick={() => deleteItem(items)} className="delete-btn">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    );
  }
  