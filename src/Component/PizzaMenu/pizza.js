import React from 'react';
import PizzaList from '../PizzaList/PizzaList';

function pizza(props) {
    const PizzaData = props.MenuItem;
    return (
        <>
        {
            PizzaData.map(menu => <PizzaList key={menu._id} PizzaList={menu} ></PizzaList>  )
        }
        </>
    );
}

export default pizza;