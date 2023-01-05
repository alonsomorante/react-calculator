import Input from './components/Input';
import Boton from './components/Boton';
import Clear from './components/Clear';
import './App.css';
import "./styles/Boton.css"
import "./styles/Clear.css"
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("")

  const selectNumber = (val) => {
    setInput(input + val)
  }

  const result = () => {
    setInput(evaluate(input))
  }

  
  return (
    <div className="App">
      <div className='input-container'>
        <Input input={input}/>
      </div>
      <div className='botones-container'>
          <Boton pickNumber={selectNumber}>1</Boton>
          <Boton pickNumber={selectNumber}>2</Boton> 
          <Boton pickNumber={selectNumber}>3</Boton>
          <Boton pickNumber={selectNumber}>+</Boton>
          <Boton pickNumber={selectNumber}>4</Boton>
          <Boton pickNumber={selectNumber}>5</Boton>
          <Boton pickNumber={selectNumber}>6</Boton>
          <Boton pickNumber={selectNumber}>-</Boton>
          <Boton pickNumber={selectNumber}>7</Boton>
          <Boton pickNumber={selectNumber}>8</Boton>
          <Boton pickNumber={selectNumber}>9</Boton>
          <Boton pickNumber={selectNumber}>/</Boton>
          <Boton pickNumber={result}>=</Boton>
          <Boton pickNumber={selectNumber}>0</Boton>
          <Boton pickNumber={selectNumber}>.</Boton>
          <Boton pickNumber={selectNumber}>/</Boton>
      </div>
      <div className='clear-container'>
        <Clear text="Clear" action={() => setInput("")}/>
      </div>
    </div>
  );
}

export default App;
