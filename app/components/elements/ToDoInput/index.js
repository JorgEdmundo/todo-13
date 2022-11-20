import { useEffect, useState } from 'react';

export default function ToDoInput({ addToDo, cancelEdit, isEditing, saveEdit, toDo }) {
  const [toDoInput, setToDoInput] = useState('');

  useEffect(() => {
    const value = toDo.value || '';
    setToDoInput(value);
  }, [toDo])

  const label = isEditing ? 'Edit Todo' : 'New Todo';
  const stateClass = isEditing ? 'edit' : 'add';

  const getToDoInput = (e) => {
    setToDoInput(e.target.value);
  };

  const handleSaveEdit = () => {
    if (!toDoInput) return null;

    const editedToDo = {...toDo, value: toDoInput};
    saveEdit(editedToDo);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      isEditing ? handleSaveEdit() : addToDo(toDoInput);
      setToDoInput('');
    }
  }

  const handleClick = () => {
    return () => {
      addToDo(toDoInput);
      setToDoInput('');
    }
  }

  const renderActions = () => {
    if (isEditing) {
      return (
        <>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      )
    }

    return <button onClick={handleClick()}>Add Todo</button>;
  }

  return (
    <div className={`todo__form todo__form--${stateClass}`}>
      <div className="todo__input">
        <label>{label}</label>
        <input
          value={toDoInput}
          onChange={getToDoInput}
          onKeyUp={handleKeyPress}
          type="text"
        />
      </div>
      { renderActions() }
    </div>
  );
}
