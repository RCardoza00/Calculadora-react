import './App.css';
import logoFreeCodeCamp from './imagenes/freecodecamp-logo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import {useState} from 'react'
import {evaluate} from 'mathjs'
function App() {
  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input+val);
  };
  const clearInput = ()  => {
      setInput('')
  };
  const calcularResultado = () =>{
    if(input!=''){
      setInput(evaluate(input));

    }
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={logoFreeCodeCamp}
          className='freecodecamp-logo'
          alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
          <div className='fila'>
          <Boton ManejarClick={agregarInput}>7</Boton>
          <Boton ManejarClick={agregarInput}>8</Boton>
          <Boton ManejarClick={agregarInput}>9</Boton>
          <Boton ManejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton ManejarClick={agregarInput}>4</Boton>
            <Boton ManejarClick={agregarInput}>5</Boton>
            <Boton ManejarClick={agregarInput}>6</Boton>
            <Boton ManejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton ManejarClick={agregarInput}>1</Boton>
            <Boton ManejarClick={agregarInput}>2</Boton>
            <Boton ManejarClick={agregarInput}>3</Boton>
            <Boton ManejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
          
          <Boton ManejarClick={agregarInput}>.</Boton>
          <Boton ManejarClick={agregarInput}>0</Boton>
          <Boton ManejarClick={clearInput}>AC</Boton>
          <Boton ManejarClick={calcularResultado}>=</Boton>
           
          </div>
      </div>
    </div>
  );
}

export default App;
