import React from "react"
import moment from 'moment'

function CalendarHead(){
    const weekdayShort = moment.weekdaysShort()

    //Creates calendar header
    let weekdayNames = weekdayShort.map(day =>{
        return(
            <th key={day} className="week-day">
                {day}
            </th>
        )
    })

    return (
        <thead>
            <tr class="weekday-row">
                {weekdayNames}
            </tr>
        </thead>
    )
}

export default CalendarHead