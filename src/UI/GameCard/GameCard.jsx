// REACT
import React from 'react'
// STYLES
import s from './GameCard.module.css'

function GameCard({title, desc, img, raiting}) {

  return (
    <>
        <div className={s.card}>  
            <div className= {s.cardContent}>
                <img className={s.cardImage} src={img} alt="" />
                <h3 className= {s.cardTitle}>{title}</h3>
                <h4 className={s.cardSubtitle}>
                  {
                    desc.split(" ").map((word, index) => {
                        return (
                          <span style={{transitionDelay: `${index*80}ms`}} className={s.cardSubtitleWord}>
                            {word}
                          </span>
                        ) 
                    })
                  }
                </h4>

            </div>
        </div>
    </>
  )
}

export default GameCard;