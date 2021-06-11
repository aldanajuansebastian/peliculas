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
                <div className="add-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <h3>AÑADIR UNA NUEVA PELÍCULA</h3>
                        <p>
                            <label>Nombre de la película</label><br />
                            <input onChange={this.onChangeTitle} className="input" type="text" name="nombreFilm" placeholder="Ingresa el nombre"/>
                        </p>

                        <p>
                            <label>Género</label><br />
                                <select onChange={this.onChangeGender}>
                                    <option value="Terror">Terror</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Suspenso">Suspenso</option>
                                    <option value="Accion">Accion</option>
                                </select>
                        </p>

                        <p>
                            <label>Calificación</label><br />
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
                            <input onChange={this.onChangeImage} className="input" type="text" name="imagen" placeholder="Ejemplo: ElCofre.png"/>
                        </p>

                        <input type="submit" className="btnAdd" value="Añadir" />
                        <button onClick={this.props.oncancel} className="btnCancel">Cancelar</button>

                    </form>

                </div>

            </div>
        )
    }
}
export default PanelAdd;