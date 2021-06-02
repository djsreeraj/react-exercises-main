import React, { FC, useEffect, useState } from 'react'
import './Time.css'

const Time:FC = () => {
   let date: Date = new Date();

   const [currentDate, setCurrentDate] = useState<Date>(date);

   useEffect(() => {
          setCurrentDate(new Date());
    }, [currentDate]);

   return (    
        
           <p className="time">
                {currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
           </p>        
    )
}

export default Time
