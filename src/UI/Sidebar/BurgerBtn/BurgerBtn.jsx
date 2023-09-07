import React from 'react'

import s from './BurgerBtn.module.css'
function BurgerBtn({setIsActive, isActive}) {
  return (
    <div className={s.burgerBtn} onClick = {() => setIsActive(!isActive)}>
        <span></span>
    </div>
  )
}

export default BurgerBtn;