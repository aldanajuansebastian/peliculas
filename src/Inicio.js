import React from 'react';
import './inicio.css';
import {Link} from 'react-scroll';

function Inicio (props) {
    return (
        <div className="inicio">
            <div className="contenedor">
                <img className="logog" src="img/logocp.png" width="80%" alt="Logo Cinepelis"/> 
                <h2>CINE INDEPENDIENTE</h2>
                <h3>¡Disfruta de los mejores filmes <br/> independientes producidas por <span id="fontCP">CinePelis</span></h3>
                <br/>
                <button className="btn-blue" type="button"><Link to="buscar" smooth={true} duration={1000}>Buscar</Link></button>
            </div>
        </div>

    )
}

export default Inicio;