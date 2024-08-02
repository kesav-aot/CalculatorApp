import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  const [value, setValue] = useState('');
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '=', 'C', 'CE', '.'];

  const handleClick = (e) => {
    if (e === 'C') {
      setValue('');
    } else if (e === 'CE') {
      setValue(value.slice(0, -1));
    } else if (e === '=') {
      try {
        setValue(`${eval(value)}`);
      } catch (error) {
        setValue('Error');
      }
    } else if (['+', '-', '*', '/'].includes(e)) {
      const lastChar = value.slice(-1);
      if (['+', '-', '*', '/'].includes(lastChar)) {
        setValue(value.slice(0, -1) + e);
      } else {
        setValue(value + e);
      }
    } else {
      setValue(value + e);
    }
  };

  return (
    <>
      <Calculator arr={arr} value={value} setValue={setValue} handleClick={handleClick} />
    </>
  );
}

export default App;