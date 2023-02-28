import React from 'react'

export const EventosComponente = () => {
  
    const hasDadoClick = (e, nombre) => {
        alert("Click" + nombre);
    }

    function hasDadoDobleClick(e){
        alert("Doble Click");
    }
  
   return (
    <div>
        <h2>Eventos en React</h2>

        {/* Evento click, VERSION INCRUSTADA*/}
        {/* <button onClick={ (e) => {
            console.log(e)
            console.log("Botón pulsado")
        }}>
        BOTON
        </button> */}

        {/* Evento click, VERSION LLAMADA A FUNCION */}
        <button onClick={ e => hasDadoClick(e, "Ruben")}>CLICK</button>
        
        {/* Evento doble click */}
        <button onDoubleClick={hasDadoDobleClick}>DOBLE CLICK</button>


    </div>
  )
}
