import { useState, useEffect } from 'react'
import MenuHeader from './MenuHeader'
import Items from './Items'
import './Menu.css'

const Menu = ({menuData}) => {

    useEffect(() => {
        const testing = () => {
            console.log("hello I'm from Menu.js")
            console.log(menuData)
        }
        testing()
    })

    let mains;
    if(menuData.length>0) {
        mains = menuData[0];
    } else {
        mains = [];
    }
    
    return (

        <div>
            <MenuHeader />
            <div className='menu-wrapper'>
                <div className='menu-container'>
                    <Items items={mains} />
                </div>
            </div>
        </div>
    );
};

export default Menu;