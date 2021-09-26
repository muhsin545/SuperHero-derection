import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Celebrity.css'
const Celebrity = (props) => {

    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, salary, occupation, img, country, Age } = props.celebrity
    return (
        <div className='col-md-4 mb-4'>
            <div className="card mb-3  h-100" style={{
                maxWidth: '540px'
            }}>
                <div class="">
                    <div className="text-center">
                        <img width='50%' src={img} className="img-fluid rounded-pill  mt-5 pt-2" alt='img of Sheikh' />

                        <div className='text'>
                            <h4 className="mt-2">{name}</h4>
                            <p>Occupation : {occupation}</p>
                            <p>Age : {Age}</p>
                            <p>Country : {country}</p>
                            <h5>Salary : $ {salary}</h5>
                            <button
                                onClick={() => props.handleAddToCart(props.celebrity)} className='btn btn-outline-dark mt-2'>{element} Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Celebrity;