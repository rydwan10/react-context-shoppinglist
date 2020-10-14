import { v4 as uuidv4 } from 'uuid';

export const itemReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM' :
            return [...state, { id: uuidv4(), item: action.payload.item, note: action.payload.note }]
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id)
        case 'REMOVE_ALL':
            return []
        default:
            return state
    }
}
