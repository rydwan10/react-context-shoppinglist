import React, { useState } from 'react'
import './css/AddItem.css';

const AddItem = () => {
    const [item, setItem] = useState('')
    const [note, setNote] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        console.log(note);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <label htmlFor="item">Item Name</label>
                <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item..." />
            </div>
            <div className="form-note">
                <label htmlFor="note">Note</label>
                <input type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note..." />
            </div>
            <input type="submit" value="Add Item" />
        </form>
    )
}

export default AddItem
