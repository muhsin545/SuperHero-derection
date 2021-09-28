import React from 'react';

const box = (props) => {

    return (
        <div className='d-flex align-items-center justify-content-space-between bg-info p-2 m-2 rounded-3'>
            <img src={props.name.img} className='w-50 rounded-circle' alt="" />
            <h3>{props.name.name}</h3>
        </div>
    );
};

export default box;