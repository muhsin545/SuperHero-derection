import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import Box from './Box';
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const celebrity of cart) {
        total = celebrity.salary + total;
    }

    const displayName = props.cart.map(name => <Box key={name.key} name={name}></Box>)
    const element = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <div className="card text-dark bg-white shadow w-auto">
                <div className="card-header bg-white text-center fw-bolder">Summary</div>
                <div className="card-body border border-info">
                    <h4>{element} Sheikh Added:{props.cart.length} </h4>
                    <h4>Total Cost :{dollar} {total}  </h4>
                    {displayName}
                </div>

            </div>

        </div>
    );
};

/*  name={name} */
export default Cart;

/*
<div className='d-flex justify-content-around align-items-center'>
        <img src={name.img} width='70px' className='rounded-circle my-2 me-2' alt="" />
        <li>{name.name}</li>

    </div>

*/