import React, { useState, useContext } from 'react'
import { ItemContext } from '../contexts/ItemContext';
import './css/AddItem.css';

const AddItem = () => {
    const [item, setItem] = useState('');
    const [note, setNote] = useState('');

    const [open, setOpen] = useState(false);

    const { dispatch } = useContext(ItemContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.trim() === '') {
            window.alert('Item must be not empty!');
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { item: item, note: note } });
            setItem('');
            setNote('');
        }
    }
    return open ? (
        <React.Fragment>
            <button className="hide-button" onClick={() => setOpen(false)}>Hide</button>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="item">Item Name</label>
                    <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item..." />
                </div>
                <div className="form-note">
                    <label htmlFor="note">Note</label>
                    <input type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note..." />
                </div>
                <input className="add-item" type="submit" value="Add Item" />
            </form>
        </React.Fragment>
    ) : (
            <button className="add-item" onClick={() => setOpen(true)}>Add Item</button>
        )
}

export default AddItem
