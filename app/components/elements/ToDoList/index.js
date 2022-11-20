'use client';

import { useState } from 'react';
import ToDo from '../ToDo';
import ToDoInput from '../ToDoInput';

export default function ToDoList() {
  const [isEditing, setIsEditing] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [toDoEdit, setToDoEdit] = useState({})

  const addToDo = (toDoInput) => {
    if (!toDoInput) return null;

    setToDos([...toDos, {
      completed: false,
      id: toDos.length + 1,
      value: toDoInput
    }]);
  }

  const cancelEdit = () => {
    setIsEditing(false);
  }

  const completeToDo = (toDoId) => {
    return () => {
      const edited = [...toDos].map((toDo) => {
        if (toDo.id === toDoId) {
          toDo.completed = !toDo.completed;
        }

        return toDo;
      });

      setToDos(edited);
    }
  }

  const deleteToDo = (itemId) => {
    return () => {
      const filtered = [...toDos].filter(({ id }) => id !== itemId);
      setToDos(filtered);
    }
  }

  const editToDo = (toDo) => {
    return () => {
      setToDoEdit(toDo);
      setIsEditing(true);
    }
  }

  const saveEdit = (toDo) => {
    const editedList = [...toDos].map((toDoItem) => {
      if (toDoItem.id === toDo.id) {
        toDoItem.value = toDo.value
      }

      return toDoItem;
    });

    setToDos(editedList);
    setIsEditing(false);
    setToDoEdit({});
  }

  const renderToDos = () => {
    return (
      toDos.map((item) => {
        return (
          <ToDo
            completeToDo={completeToDo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
            isEditing={isEditing}
            key={item.id}
            toDo={item}
          />
        );
      })
    );
  }

  return (
    <div className="todo">
      <ToDoInput
        addToDo={addToDo}
        cancelEdit={cancelEdit}
        isEditing={isEditing}
        saveEdit={saveEdit}
        toDo={toDoEdit}
      />
      <div className="todo__list">
        <ul>
          { renderToDos() }
        </ul>
      </div>
    </div>
  );
}