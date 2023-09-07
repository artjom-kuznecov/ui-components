import { useState } from 'react'
import './App.css'  
import {linkItems} from './data/Data'
import GameCard from './UI/GameCard/GameCard.jsx'
import Sidebar from './UI/Sidebar/Sidebar.jsx'
import BurgerBtn from './UI/Sidebar/BurgerBtn/BurgerBtn'
import RaitingBar from './UI/RaitingBar/RaitingBar'


function App() {

  return (
    <>
      <div style={{display: 'flex', justifyContent: "center"}}>
        <GameCard 
        img = {"https://vkplay.ru/hotbox/showcase/gamelocale/picture/dac9251a-d851-4ff9-b783-edcb8a6f2bc1.jpg"} 
        title={"Atomic Heart"} 
        desc={"lorem ipsum asd ewq zxc dsa zxceqwewe sad"}
        raiting = {3.4}  //! !!
        />  

        <Sidebar items = {linkItems}/>
      </div>

      <RaitingBar raiting = {5} /> {/* драгабл сделать!!!! */}
        
</>

  )
}

export default App
