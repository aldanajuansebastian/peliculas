import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import Inicio from './Inicio';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      peliculas:[
        {id:0, calificacion:4, nombreFilm:'El Adios', imagen:'Adios.png', genero:'Drama'},
        {id:1, calificacion:4, nombreFilm:'La Evidencia', imagen:'Evidencia.png', genero:'Suspenso'},
        {id:2, calificacion:4, nombreFilm:'El Asalto', imagen:'Asalto.png', genero:'Terror'},
        {id:3, calificacion:4, nombreFilm:'El Cofre de la Muerte', imagen:'ElCofre.png', genero:'Terror'},
        {id:4, calificacion:4, nombreFilm:'El Hacker', imagen:'ElHacker.png', genero:'Accion'},
        {id:5, calificacion:4, nombreFilm:'Armas y Cascos', imagen:'Armas.png', genero:'Accion'}
      ],
      copyPeliculas: []
    };
  }

  componentDidMount() {
    this.initPeliculas();
  }

  initPeliculas = () => {
    this.setState((state,props) => (
      {
        copyPeliculas: [... state.peliculas]
      }
    ));
  }


  onAdd = (item) => {
    let temp = [... this.state.peliculas];
    const id = temp[temp.length - 1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({peliculas:[... temp]});
    this.initPeliculas();
  }

  onSearch = (query) => {
    if(query === ''){
      this.initPeliculas();
    } else {
      const temp = [...this.state.peliculas];
      let res = [];

      temp.forEach(item =>{
        if(item.nombreFilm.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyPeliculas: [... res]});
    }
  }

  onUpDateRating = (item) => {
    var temp = [... this.state.peliculas];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].nombreFilm = item.nombreFilm;
    temp[index].genero = item.genero;
    temp[index].imagen = item.imagen;
    temp[index].calificacion = item.calificacion;

    this.setState({peliculas: [... temp]});
    this.initPeliculas();
  }

  onRemove = (id) => {
    var temp = [... this.state.peliculas];
    const res = temp.filter(item => item.id != id)

    this.setState({peliculas: [... res]});
    this.initPeliculas();
  }


  render(){
      return (
        <div className="App">
          <Inicio />
          <Menu onadd={this.onAdd} onsearch = {this.onSearch} />
          <List 
            items={this.state.copyPeliculas} 
            onupdaterating={this.onUpDateRating}
            onremove={this.onRemove}
          />
        </div>
      );
    }
}

export default App;
