import React from 'react'
import WeekDay from './WeekDay';

function WeekComponent() {
    const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "weekend"];
  return (
    <div className='day-container'>
        {weekdays.map((day, index)=> <WeekDay day={day} key={index} />)}
    </div>
  )
}

export default WeekComponent