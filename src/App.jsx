import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Lottery from './Lottery';

function App() {
  return (
    <>
     <Lottery n={3} winningSum={15}/>
    </>
  );
}

export default App;
