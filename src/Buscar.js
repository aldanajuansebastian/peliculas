import React from 'react';

class Buscar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value: ''};
        this.onChangeEvent = this.onChangeEvent.bind(this);
    }
    
    onChangeEvent(e) {
        this.setState({value: e.target.value})
        const query  = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }

    render(){
        return (
        <input type="text" value="" placeholder="Buscar pelicula..." onChange={this.onChangeEvent} />
    );}
    
}

export default Buscar;