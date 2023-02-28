// Importar modulos de react / dependencias
import React from "react";

// Función del componente
const MiComponente = () => {

    let nombre = "Victor";
    let web = "victorroblesweb.es";

    let usuario = {
        nombre: "Victor",
        apellidos: "Robles",
        web: "victorroblesweb.es"
    }

    return (<div className="MiComponente">
                <hr/>
                <h2>Componente creado</h2>
                <h3>Datos del usuario:</h3>
                <ul>
                    <li>Nombre: <strong>{usuario.nombre}</strong></li>
                    <li>Apellidos: <strong>{usuario.apellidos}</strong></li>
                    <li>Web: <strong>{usuario.web}</strong></li>
                </ul>
            </div>);
}

// Export
export default MiComponente;