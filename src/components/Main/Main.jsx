import React, { useState } from 'react';

import TodoHeader from './../TodoHeader/TodoHeader';
import AddItem from './../AddItem/AddItem';
import SearchItem from './../SearchItem/SearchItem';
import TodoList from './../TodoList/TodoList';
import TodoFooter from './../TodoFooter/TodoFooter';

export default function Main() {

  let storage1 = JSON.parse(localStorage.getItem('todoList'));
  let storage2 = [
    {
      id: 1,
      checked: false,
      item: "Утро",
    },
    {
      id: 2,
      checked: false,
      item: "День",
    },
    {
      id: 3,
      checked: true,
      item: "Вечер",
    },
    {
      id: 4,
      checked: false,
      item: "Ночь",
    },
  ];
  let listItems = storage1?.length ? storage1 : storage2
  const [items, setItems] = useState(listItems);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');

  function handleCheck(id) {
    const listItems = items.map(item => item.id === id ? {...item, checked : !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
  }

  function handleDelete(id) {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todoList', JSON.stringify(listItems));
  }

  function setAndSaveItems(newItems) {
    setItems(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));
  }

  function addItem(item) {
    const id = items.length ? items.at(-1).id + 1 : 1;
    const newItem = {id, checked: false, item};
    const listItems = items.concat(newItem);
    setAndSaveItems(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log(newItem);
    setNewItem('');
  }

  return (
    <main className="container">
      <TodoHeader />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <TodoList
        items={items.filter( item => {
          return (item.item).toLowerCase()
          .includes(searchItem.toLowerCase())
        })}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <TodoFooter
        length={items.length}
      />
    </main>
  );
}
