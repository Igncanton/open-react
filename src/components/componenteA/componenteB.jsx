import React, { useState } from 'react';
import PropTypes from 'prop-types';

//No logro recibir el parametro conectado desde el nuevo contacto, me tira undefined, puedo hacerlo escribiendolo yo explicitamente pero no de este modo
//No entiendo ademas si el estado lo cambio desde el componente de clase o si lo hago desde el componente B
//Tampoco entiendo si el estado lo cammbio de manera manual o si debo agregar un boton

const ComponenteB = ({ nombre, apellido, email, conectado }) => {
    // const [online, setOnline] = useState(false)
    // setOnline(conectado)
    console.log(conectado)
    return (
        <div>
            {conectado ? <p>Contacto En Linea</p> : <p>Contacto No Disponible</p>}
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;

