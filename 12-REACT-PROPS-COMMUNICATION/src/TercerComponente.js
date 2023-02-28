import React from 'react'
import PropTypes from 'prop-types'
export const TercerComponente = ({nombre, apellidos, ficha}) => {
// export const TercerComponente = ({nombre = "Nom_DEFAULT", apellidos = "Ape_DEFAULT", ficha}) => {
// Aquí jugamos con los PARAMETROS POR DEFECTO

// (props) -> con DESTRUCTURING, = (nombre, apellidos, ficha)
  // Así nos ahorramos de poner tantas veces props en la llamada de los li
  
  // PropTypes  
  
  
  
  return (
    <div>
        <h2>Comunicación entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>

        </ul>


    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
  nombre: "Ruben_DEF",
  apellidos: "Alvarez_DEF"
}