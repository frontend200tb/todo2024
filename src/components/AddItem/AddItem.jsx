import './AddItem.scss'
import React, { useRef } from 'react';

export default function AddItem({newItem, setNewItem, handleSubmit}) {
  const inputRef = useRef();
  return (
    <div>
      <h2>Добавить задачу</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          ref={inputRef}
          id="addForm"
          placeholder="Add item"
          required
          value={newItem}
          onChange={ (e) => setNewItem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add item"
          onClick={ () => inputRef.current.focus() }
        >добавить</button>
      </form>
    </div>
  )
}