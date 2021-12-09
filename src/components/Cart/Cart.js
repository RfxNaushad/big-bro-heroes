import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, selected } = props;
    // console.log(cart.name);
    // console.log(cart)

    let total = 0;

    for( const hero of selected){
        total = total + hero.salary;
        console.log(hero.name)
    }

    return (
        <div>
            <h2>Team Hero : {selected.length}</h2>
            <p>Salary: {total.toFixed(2)}</p>
             {
                 selected.map(hero => <li>{hero.name}</li>)
             }
        </div>
    );
};

export default Cart;