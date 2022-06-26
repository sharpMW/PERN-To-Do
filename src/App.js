import React, {Fragment} from 'react';
import './App.css';

//componnets
import InputTodo from "./components/inputTodo";
import ListTodo from "./components/listTodo";

function App() {
  return (
   <Fragment>
   <div className='container'> 
   <InputTodo/>
   <ListTodo/>
   </div> 
   </Fragment>
  );
}

export default App;
