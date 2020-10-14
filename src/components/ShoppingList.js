import React, { useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import Item from './Item'

const ShoppingList = () => {
    const { items } = useContext(ItemContext)
    return (
        <ul>
            { 
                items.map(item => {
                    return <Item key={item.id} item={item} />
                })
            }
        </ul>
    )
}

export default ShoppingList
