import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Item from './Item'
import './css/ShoppingList.css'

const ShoppingList = () => {
    const { items, dispatch } = useContext(ItemContext)

    const handleClearAll = () => {
        if(window.confirm('Clear all shopping list?')) {
            dispatch({ type: 'REMOVE_ALL' })
        }
    }

    return items.length > 0 ? (
        <React.Fragment>
            <div className="button-wrapper">
                <button className="clear-all-button" onClick={handleClearAll}>Clear All</button>
            </div>
            <ul>
                {
                    items.map(item => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </ul>
        </React.Fragment>
    ) : (
            <div className="empty">
                <p>Hmm... There is nothing to buy right now. <br />Let's add something!</p>
                
            </div>
        )
}

export default ShoppingList
