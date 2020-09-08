import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import List from './List';

const  TodoList = (props) => {

  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref('Todo');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
      console.log(todoList)
    });
  }, []);

  return (
    <div>
      {todoList
        ?
         todoList.map((todo, index) => <List todo={todo} key={index} />)
        : ''}
        {/* {todoList.map((todo, index) => <List todo={todo} key={index} />)} */}
    </div>
  );
}
export default TodoList;