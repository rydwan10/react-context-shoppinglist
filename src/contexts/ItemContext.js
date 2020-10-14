import React, { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { itemReducer } from '../reducers/itemReducer';

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
    const [items, dispatch] = useReducer(itemReducer, [
        { id: uuidv4(), item: 'Onion', note: 'buy the extra large one' },
        { id: uuidv4(), item: 'Carrot', note: 'choose the bright one' },
        { id: uuidv4(), item: 'Garlic', note: '' }
    ])
    
    return (
        <ItemContext.Provider value={{items, dispatch}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemContextProvider
