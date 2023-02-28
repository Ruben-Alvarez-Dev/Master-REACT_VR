import React from 'react'

export const TercerComponente = ({nombre, apellidos, ficha}) => {
  // (props) -> con DESTRUCTURING, = (nombre, apellidos, ficha)
  // Así nos ahorramos de poner tantas veces props en la llamada de los li
  
    return (
    <div>
        <h2>Comunicación entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.alergias}</li>
            <li>{ficha.altura}</li>

        </ul>


    </div>
  )
}
