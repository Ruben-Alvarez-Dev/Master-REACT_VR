import React from 'react'

export const SegundoComponente = () => {
  
    // const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    const libros = [];
  
    return ( 

        <div className='segundo-componente'>
        
            <h1>Listado de libros</h1>

            {libros.length >= 1
            ?
                (
                    libros.map((libro, indice) => {
                        return <li key={indice}>{libro}</li>;
                    })
                )
            :
                (
                    <p>No hay libros</p>
                )
            }


        
        
        </div>
  
  
    )
}
