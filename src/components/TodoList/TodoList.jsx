import './TodoList.scss';

function Main( {items, setItems, handleCheck, handleDelete} ) {
  return (
    <div className="TodoList">
      <h2>Список задач</h2>
      <ul>
        {items.map(item => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
            style={(item.checked) ? {textDecoration: "line-through"} : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <button
              className="btn-del"
              onClick={() => handleDelete(item.id)}
            >удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Main;