import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';

//No logro enviar el parametro conectado desde el nuevo contacto, me tira undefined, puedo hacerlo escribiendolo yo explicitamente pero no de este modo
//No entiendo ademas si el estado lo cambio desde el componente de clase o si lo hago desde el componente B
//Tampoco entiendo si el estado lo cammbio de manera manual o si debo agregar un boton

class Contacto extends Component {
    constructor(nombre, apellido, email, conectado) { //no entiendo commo enviar este ultimo parametro o como enviarle el estado de esta clase por prop al componente B
        super();
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    state = {
        online: true
    }

    render() {
        return (
            <div>
                <ComponenteB online={new Contacto("Juan", "Perez", "juanperez@gmail.com", this.state.online)} />
            </div>
        );
    }
}


Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default Contacto;
