import React, {useContext} from 'react'
import './css/Item.css';
import { ItemContext } from '../contexts/ItemContext';

const Item = ({ item }) => {

    const { dispatch } = useContext(ItemContext);

    return (

        <li>
            <div className="wrapper">
                <div className="item-wrapper">
                    <p className="item">{item.item}</p>
                    <p className="note">{ item.note ? '*' : '' }{item.note}</p>
                </div>
                <div className="delete-button" onClick={ () => dispatch({ type: 'REMOVE_ITEM', payload: {id: item.id} }) }>
                    X
                </div>
            </div>
        </li>
    )
}

export default Item
