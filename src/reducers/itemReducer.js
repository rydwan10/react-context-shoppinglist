import { v4 as uuidv4 } from 'uuid';

export const itemReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [...state, { id: uuidv4(), item: action.item.item, note: action.item.note }]
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.item.id)
        case 'REMOVE_ALL':
            return []
        default:
            return state
    }
}
