import React from 'react';
import './ReviewItem.css';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveCart}) => {
    const {id,name, img,price, quantity} = product;
    return (
        <div className='review-item'>
            <div className='left-item'>
            <img src={img} alt="" />
            <div>
                <h6>{name}</h6>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            </div>
            <div>
                <button onClick={()=> handleRemoveCart(id)} className='btn-delete' ><FontAwesomeIcon className='fa-2x' icon={faTrashAlt} /></button>
            </div>
        </div>
    );
};

export default ReviewItem;