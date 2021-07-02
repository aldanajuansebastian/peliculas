import React from 'react';
import './PanelAdd.css';

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);

        this.state = 
            {
                title:'',
                genero:'',
                calificacion:1,
                imagen:''
            }

    };

    

    onChangeTitle = (e) => {
        this.setState({nombreFilm: e.target.value});
    }

    onChangeImage = (e) => {
        this.setState({imagen: e.target.value});
    }

    onChangeGender = (e) => {
        this.setState({genero: e.target.value});
    }
    onChangeRating = (e) => {
        const calificacion = parseInt(e.target.value);
        this.setState({calificacion: calificacion});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const nombreFilm = this.state.nombreFilm;
        const genero = this.state.genero;
        const calificacion = this.state.calificacion;
        const imagen = this.state.imagen;
        this.props.onadd({nombreFilm: nombreFilm, genero: genero, calificacion:calificacion, imagen:imagen});
        this.props.oncancel();
    }
    
    render() {
        return (
            <div className="fondo">
                <div className="container2">
                    <img src="img/fondo2.png" width="250%"></img>
                </div>
                <div className="add-item-panel">
                    <img src="img/logocp.png" width="80%"></img>
                    <form onSubmit={this.onSubmit}>
                        <h2>AÑADIR UNA NUEVA PELÍCULA</h2>
                        <p>
                            <label>Nombre de la película</label>
                            <input onChange={this.onChangeTitle} className="inputform" type="text" name="nombreFilm" placeholder="Ingresa el nombre"/>
                        </p>

                        <p>
                        <label>Género  </label>
                            <select onChange={this.onChangeGender}>
                                    <option value="Terror">Terror</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Suspenso">Suspenso</option>
                                    <option value="Accion">Accion</option>
                            </select>
                        </p>

                        <p>
                            <label>Calificación  </label>
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>

                        <p>
                        <label>Nombre de la imagen</label><br />
                            <input onChange={this.onChangeImage} className="inputform" type="text" name="imagen" placeholder="Ejemplo: ElCofre.png"/>
                        </p>

                        <input type="submit" className="btn-blue" value="Añadir" />
                        <button onClick={this.props.oncancel} className="btn-red">Cancelar</button>

                    </form>

                </div>

            </div>
        )
    }
}
export default PanelAdd;