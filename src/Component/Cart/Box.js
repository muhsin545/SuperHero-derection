import React from 'react';

const box = (props) => {

    return (
        <div className='d-flex align-items-center bg-info p-2 m-2 rounded-3'>
            <img src={props.name.img} className='w-50 rounded-circle me-2' alt="" />
            <p>{props.name.name}</p>
        </div>
    );
};

export default box;