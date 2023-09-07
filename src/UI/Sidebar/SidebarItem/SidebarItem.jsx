import React from 'react'

import s from './SidebarItem.module.css'

// a === Link to!!!!
function SidebarItem({to, value}) {

    const letters = "abcdefghijklmnopqrstuvwxyz";

    let interval = null;
    
    const linkHandler = event => {  
        let iteration = 0;
  
        clearInterval(interval);
        
        interval = setInterval(() => {
          event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
              if(index < iteration) {
                return event.target.dataset.value[index];
              }
            
              return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
          
          if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
          }
          
          iteration += 1 / 3;
        }, 30);
    }




  return (
    <a onMouseOver={e => linkHandler(e)} className={s.link} href = {to} data-value= {`${value}`}>  
        {value}
    </a>
  )
}

export default SidebarItem;