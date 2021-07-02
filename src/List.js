import React from 'react';
import Item from './Item.js';
import './list.css';

function List (props) {
    return (
        <div className="list">
            {
                props.items.map(item =>
                    <Item 
                        key={item.id}
                        id={item.id}
                        nombreFilm={item.nombreFilm}
                        imagen={item.imagen}
                        calificacion={item.calificacion}
                        genero={item.genero}
                        
                        onupdaterating={props.onupdaterating}
                        onremove={props.onremove}
                        
                    />

                    
                        
                )
            }

        </div>
    );
}

export default List;