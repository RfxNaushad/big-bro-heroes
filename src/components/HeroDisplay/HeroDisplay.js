import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Heroes from '../Heroes/Heroes';
import './HeroDisplay.css';

const HeroDisplay = () => {
    const[heroes, setHeroes] = useState([]);
    const[cart, setCart] = useState([]);
    const [selected, setSelected] = useState([]);
    console.log(selected);

    useEffect(() => {
        fetch('./fake.json')
        .then(res => res.json())
        .then(data => {
            setHeroes(data)
        })
    }, [])

    const handleHero = (hero) => {
        const newCart = [...cart, hero];
        setCart(newCart);
        // console.log(newCart.name)
        // console.log(hero)
    }
    // console.log(heroes);
    return (
        <div className="heroes-section">
            <div className="display-card">
                  {
                      heroes.map(hero=> <Heroes 
                      selected= {selected}
                      setSelected= {setSelected}
                      handleHero={handleHero}
                      key={hero.key} hero={hero}></Heroes>)
                  }
            </div>
            <div className="cart-display">
                <Cart cart={cart} selected={selected} ></Cart>
            </div>
        </div>
    );
};

export default HeroDisplay;