import React from 'react'

export const EventosComponente = () => {
  
    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón " + nombre);
    }

  
  
   return (
    <div>
        <h2>Eventos en React</h2>

        {/* Evento click */}
        {/* <button onClick={ (e) => {
            console.log(e)
            console.log("Botón pulsado")
        }}>
        BOTON
        </button> */}

        <button onClick={ e => hasDadoClick(e, "Ruben")}>PULSA</button>
        
    </div>
  )
}
