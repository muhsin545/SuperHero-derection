import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Celebrity from './Celebrity/Celebrity';

import './Main.css'
const Main = () => {



    const [celebrities, setCelebrities] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCelebrities(data))
    }, [])
    const [cart, setCart] = useState([])

    const handleAddToCart = (celebrity) => {
        const newCart = [...cart, celebrity]
        setCart(newCart)
    }
    return (
        <div>
            <div className="row ">
                <div className="col-md-9">
                    <div className="row m-0 mt-2 mb-2">
                        {
                            celebrities.map(celebrity => <Celebrity key={celebrity.key} celebrity={celebrity} handleAddToCart={handleAddToCart}></Celebrity>)
                        }
                    </div>

                </div>
                <div className="col-md-3 mt-3 me-auto">
                    <Cart cart={cart}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Main;