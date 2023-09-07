import React from 'react'
import "react-circular-progressbar/dist/styles.css";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import s from './RaitingBar.module.css'
function RaitingBar({raiting}) {


    const getBackgroundColor = (rait) => {
        if (rait <= 4 ) {
            return '#EF4F4F';
        }
        if (rait > 4 && rait < 7.5) {
            return '#FFA372';
        }
        if (rait >= 7.5 && rait <= 10) {
            return '#02f0a2';
        }
    }

  return (
    <div className= {s.wrapper}>
        <CircularProgressbar
            className={s.circle}
            background
            backgroundPadding={5}
            maxValue={10}
            strokeWidth={10}
            value={raiting}
            text= {`${raiting}`}
            styles={buildStyles({
            strokeLinecap: "butt",
            backgroundColor: getBackgroundColor(raiting),
            textColor: "white",
            textSize: "30px",
            trailColor: "transparent",
            pathColor: "#fff",
            })}
      />
    </div>
  )
}

export default RaitingBar;


// className={s.circle}
// background
// backgroundPadding={10}
// maxValue={10}
// strokeWidth={5}
// value={globalRaiting}
// text= "12"
// styles={buildStyles({
//   strokeLinecap: "butt",
//   backgroundColor: getBackgroundColor(globalRaiting),
//   textColor: "white",
//   trailColor: "transparent",
//   pathColor: "#fff",
// })}