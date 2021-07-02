import React from 'react';
import Buscar from './Buscar.js';
import './Menu.css';
import PanelAdd from './PanelAdd';

class Menu extends React.Component {

    constructor (props) {
        super(props);

        this.state = {newItemPanel:false}; 
    }

    add = (e) => {
        e.preventDefault();
        this.setState({newItemPanel:true});
    }

    oncancel = (e) => {
        this.setState({newItemPanel:false});
    }

    render ()
    {
        return (
            <section className="container" id="buscar">
                <div className="subcontainer">
                    <div className="buscar">
                        <Buscar onsearch={this.props.onsearch}/>
                    </div>

                    <div className="actions">
                        <button onClick={this.add} className="btn-blue"> Añadir Filme</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                        <PanelAdd oncancel={this.oncancel} onadd={this.props.onadd}/>
                    :
                    ''
                }
                
            </section>
        );
    }
}

export default Menu;