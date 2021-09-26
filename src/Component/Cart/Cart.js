import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const celebrity of cart) {
        total = celebrity.salary + total;
    }

    const displayName = props.cart.map(name => <li>{name.name}</li>)
    const element = <FontAwesomeIcon icon={faUser} />
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <div class="card text-dark bg-white shadow w-auto">
                <div class="card-header bg-white text-center fw-bolder">Summary</div>
                <div className="card-body">
                    <h4>{element} Sheikh Added:{props.cart.length} </h4>
                    <h4>Total Cost :{dollar} {total}  </h4>
                    <ul>
                        <li>{displayName}</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};


export default Cart;