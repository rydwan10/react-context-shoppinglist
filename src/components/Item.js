import React from 'react'
import './css/Item.css';
const Item = ({ item }) => {
    return (

        <li>
            <div className="wrapper">
                <div className="item-wrapper">
                    <p className="item">{item.item}</p>
                    <p className="note">{ item.note ? '*' : '' }{item.note}</p>
                </div>
                <div className="delete-button">
                    X
                </div>
            </div>
        </li>
    )
}

export default Item
