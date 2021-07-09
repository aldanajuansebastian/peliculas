import React from 'react';
import './item.css';

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nombreFilm:'',
            genero: '',
            calificacion:1,
            estrellas: [],
            imagen: ''
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            nombreFilm: this.props.nombreFilm,
            genero: this.props.genero,
            calificacion:this.props.calificacion,
            imagen: this.props.imagen,
            estrellas: Array(parseInt(this.props.calificacion)).fill(0)
        })
    }


    onChangeRating = e => {
        const  calificacion  = parseInt(e.target.value)
        this.setState({
            calificacion: parseInt(e.target.value),
            estrellas: Array(parseInt(e.target.value)).fill(0)
        });

        this.props.onupdaterating({id:this.state.id, nombreFilm: this.state.nombreFilm, genero: this.state.genero, imagen: this.state.imagen, calificacion: this.state.calificacion});
    }

    onRemove = e =>{
        this.props.onremove(this.props.id);
    }

    render(){
        return (
            <div className="item">
                <div className="imagen"><img src={'img/' + this.state.imagen} width='100%' alt="Poster pelicula"/></div>
                <div className="nombreFilm">{this.state.nombreFilm}</div>
                <div className="genero">{this.state.genero}</div>
                <div className="calificacion">
                    <p>
                    {
                        this.state.estrellas.map(x =>
                            <img className="star" src="img/star.png" alt="star"/>)
                        }
                    </p>
                    <p>Calificacion:</p>
                    <select value = {this.state.calificacion} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="eliminar">
                        <button className="btn-red" onClick={this.onRemove}>Eliminar</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Item;