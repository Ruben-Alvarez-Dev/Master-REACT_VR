import React from 'react'

export const EventosComponente = () => {
  
    // const hasDadoClick = (e, nombre) => {
    //     alert("Click" + nombre);
    // }

    // function hasDadoDobleClick(e){
    //     alert("Doble Click");
    // }

    // const hasEntrado = (e) => {
    //     alert("Has ENTRADO con el MOUSE")
    // }

    // const hasSalido = (e) => {
    //     alert("Has SALIDO con el MOUSE")
    // }

    // const hasEntrado = (e, accion) => {
    //     alert(`Has ${accion} a la caja`);
    //     console.log(`Has ${accion} a la caja`);
    // }

    const estasDentro = e => {
        console.log("Estás DENTRO del INPUT")
    }

    const estasFuera = e => {
        console.log("Estás FUERA del INPUT")
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

        {/* Evento click, VERSION LLAMADA A FUNCION
        <button onClick={ e => hasDadoClick(e, "Ruben")}>CLICK</button>
        
        {/* Evento doble click */}
        {/* <button onDoubleClick={hasDadoDobleClick}>DOBLE CLICK</button> */}

        {/* Evento onMouseEnter y onMouseLeave */}

        {/* <div    id="caja" 
                // onMouseEnter={hasEntrado}
                // onMouseLeave={hasSalido}>

                onMouseEnter={ e => hasEntrado (e, "ENTRADO")}
                onMouseLeave= { e => hasEntrado (e, "SALIDO")}>

            
            Pasa por encima!
        </div> */}

        <p>
            <input type="text"
                onFocus={ estasDentro }
                onBlur={ estasFuera }
                placeholder="Introduce tu nombre"/>

        </p>


    </div>
  )
}
