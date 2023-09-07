import React, { useState } from 'react'
import s from './Sidebar.module.css'
import BurgerBtn from './BurgerBtn/BurgerBtn';
import SidebarItem from './SidebarItem/SidebarItem';

function Sidebar({items}) {
  
    const [isActive, setIsActive] = useState(false)

    console.log(isActive);
    
    const rootClasses = [s.menu]
    if(isActive) rootClasses.push(s.active)
    return (
    <>
    <div className={s.asd}><BurgerBtn isActive = {isActive} setIsActive = {setIsActive}/></div>
    
    
    <div className={rootClasses.join(' ')} onClick = {() => setIsActive(false)}>
        <div className={s.blur}/>
        <div className={s.menuContent}>
            
            {
                items.map (item => 
                    <SidebarItem to={item.href} value={item.value}/>
                )
            }
        </div>
    </div>
    </>
    
  )
}

export default Sidebar;