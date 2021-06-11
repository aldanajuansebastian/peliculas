import React from 'react';

class Buscar extends React.Component {

    constructor(props) {
        super(props)
    }
    
    onChangeEvent = e =>  {
        const query  = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){
        return (
            <input type="text" placeholder="Buscar pelicula..." onChange={this.onChangeEvent} />
        
        
    );}
    
}

export default Buscar;