export default function ToDo({ completeToDo, deleteToDo, editToDo, isEditing, toDo }) {
  const { completed, id, value } = toDo;
  const toDoStatusClass = completed ? 'completed' : 'pending';

  const renderActions = () => {
    if (isEditing) return null;

    return (
      <>
        <button onClick={editToDo(toDo)}>Edit</button>
        <button onClick={deleteToDo(id)}>Delete</button>
      </>
    );
  }

  return (
    <li className={`todo__item todo__item--${toDoStatusClass}`}>
      <input type="checkbox" onChange={completeToDo(id)} />
      <span>{value}</span>
      { renderActions() }
    </li>
  );
}