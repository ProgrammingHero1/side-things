import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {



    const { name, price, gender, _id } = props.cosmetic;
    const handlePurchase = id => {
        //set to local stoage
        console.log(id);
        addToDb(id);
    }

    const handleRemove = id => {
        deleteFromDb(id);
    }

    return (
        <div>
            <h2>name: {name}</h2>
            <p>_id: {_id} Price: ${price}</p>
            <p><small>gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;