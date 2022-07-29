import React from "react";
import '../stylesheets/Boton.css'
function Boton(props)
{

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== 'AC') && (valor !== '=') 
  }
  const esIgual = valor =>{
    return (valor=='=');
  }
  return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' || esIgual(props.children) ? 'igualini' : ''}`.trimEnd()}
          onClick={() => props.ManejarClick(props.children)}>
    
      {props.children}
      
    </div>
  );
}
export default Boton;
