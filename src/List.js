  
import React from 'react';
import firebase from 'firebase';
import './style.css';

const List = ({ todo , index }) => {


  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };


  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };


  return (
    <div>
      <h1 className={todo.complete ? 'complete' : ''}> <span style={{marginLeft:'35px'}}> {todo.number} </span> {todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </div>
  );
}

export default  List;