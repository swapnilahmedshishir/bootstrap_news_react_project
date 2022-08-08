import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const PizzaList = (props) => {
    
    const {picture,name,price,about} = props.PizzaList; 
    return (
        <div>
            <div>
                <div>
                <img src={picture} alt=''/>
                </div>
                
                <div>
                    <h3>{name}</h3>
                    <span>{price}</span>
                </div>
                <div>
                    <p>{about}</p>
                    <Button><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>Order Pizza</Button>
                </div>

            </div>
        </div>
    );
};

export default PizzaList;