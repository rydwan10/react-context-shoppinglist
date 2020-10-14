import React, { useContext, Fragment } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import './css/Header.css';
import trolley from './img/trolley.png'
const Header = () => {
    const { items } = useContext(ItemContext);
    return (
        <Fragment>
            <div className="header-wrapper">
                <img src={trolley} alt="trolley" />
                <div className="title-wrapper">
                    <p className="header-title">My Shopping List</p>
                    <p className="item-left">Items left: <b>{items.length}</b></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
