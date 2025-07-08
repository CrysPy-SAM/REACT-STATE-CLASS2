import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Lottery from './Lottery';
import Ticket from './Ticket';

function App() {
  return (
    <>
      <Ticket ticket={[0, 1, 2]} />
      <Ticket ticket={[0, 1, ,5,2]} />
    </>
  );
}

export default App;
