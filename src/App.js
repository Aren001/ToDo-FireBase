import React , {useState , useEffect} from 'react';

import firebase from './firebase';

import TodoList from './TodoList';

import Form from './form';





firebase.firestore().collection('times').add({
    number:1,
    name:'Aren',
    timeSec:45
})




const   App = (props) => {




    return (
        <div  >
            
            <h1>TOoo DOoo</h1>
            <hr/>

            <Form/>
            <hr/>
            <TodoList/>
           
         

            </div>
        
    )
}

export default  App;


