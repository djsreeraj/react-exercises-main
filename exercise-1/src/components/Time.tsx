import React, { FC } from 'react'
import './Time.css'

const Time:FC=  () => {
   let date: Date = new Date();
    return (    
        
           <p className="time">
                {date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
           </p>        
    )
}

export default Time
