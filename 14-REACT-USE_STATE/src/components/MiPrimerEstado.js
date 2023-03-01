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
        
        <>Nombre: </>
        <p className={nombre.lenght >= 4 ? 'verde' : 'rojo'}>
            {nombre}
        </p> 
        
        
        {/* <button onClick={ e => cambiarNombre (e, "Perico")}>Cambiar</button>
        <br></br> */}
        
        
        <input type="text" onClick={ e => cambiarNombre( e, e.target.value ) } placeholder="Escribe nombre"></input>
    
        
        
        <br></br>        
        {/* <button onClick = { e => {
            console.log("VALOR GUARDADO: ", nombre);
        }}>Mostrar</button> */}

       
    </div>
  )
}
