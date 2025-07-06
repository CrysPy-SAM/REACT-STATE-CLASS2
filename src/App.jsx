import { useState } from 'react';
import LudoBoard from './LudoBoard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LudoBoard />
    </>
  );
}

export default App;
