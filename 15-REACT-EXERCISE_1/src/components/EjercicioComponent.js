import React, { useState } from 'react'
import PropTypes from "prop-types";

export const EjercicioComponent = ({year}) => {
  
    const [yearNow, setYearNow] = useState(year);
  
    const siguiente = e => {
        setYearNow(yearNow + 1);
    }

    const anterior = e => {
       let operacion = yearNow - 1;
       setYearNow(operacion);
    }

    const cambiarYear = e => {
        let dato = parseInt(e.target.value);
        
        if(Number.isInteger(dato)){
            setYearNow(dato);
        } else {
            setYearNow(year);
        }

        // setYearNow(dato);
        
    }

    return (
    <div>

        <h2> REACT - Ejercicio 1</h2>
        <h3> Hook useState</h3>
        <hr></hr>

        <strong className='label label-green'>
            {yearNow}
        </strong>

        <p>
        <button onClick={siguiente}>SIGUIENTE</button>
        &nbsp;
        <button onClick={anterior}>ANTERIOR</button>
        </p>

        <p>
            <label>cambiar año: </label>
            <input type="text" placeholder="escribe año" onChange={ cambiarYear }></input>
        </p>


    </div>
  )
}

EjercicioComponent.propTypes = {
    year: PropTypes.number.isRequired
}