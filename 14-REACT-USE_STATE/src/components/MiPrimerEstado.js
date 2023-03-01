import React, {useState} from 'react'

export const MiPrimerEstado = () => {
  
    // let nombre = "Ruben Alvarez"
  
    // const cambiarNombre = (e) => {
    //     nombre= "Perico el de los Palotes";
    // }

    const [ nombre, setNombre ] = useState ("Ruben Alvarez");
  
    const cambiarNombre = (e, nombreFijo )  => {
        setNombre(nombreFijo);
    }
    


    return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className = "label">
            {nombre}
        </strong><br></br>
        <button onClick={ e => cambiarNombre (e, "Perico")}>Cambiar</button>
        <input type="text" onKeyUp={ e => cambiarNombre( e, e.target.value ) } placeholder="Escribe nombre"></input>
    </div>
  )
}
