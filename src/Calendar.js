import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Day from './Day'
import Month from './Month'
import CalendarHead from './CalendarHead'

function Calendar(){
    const [dateObject, setDate] = useState(moment())

    //Finds out which day (mon, tues...sun) the first day of the month is
    const firstDayOfMonth = () => {
        let dateObj = dateObject
        let firstDay = moment(dateObject).startOf("month").format("d")
        return firstDay
    }

    let day = 1

    const createMonthTable = () => {
        let blankCells = []
        let days = []

        for(let i = 0; i < firstDayOfMonth(); i++){
            blankCells.push(<Day dayNum=" "/>)
        }
        for(let i = 1; i <= dateObject.daysInMonth(); i++){
            days.push(<Day dayNum={i}/>)
        }

        let fullMonth = [...blankCells, ...days]
        let weeks = []
        let oneWeek = []

        fullMonth.forEach((value, index) => {
            //if not end of week
            if(index % 7 !== 0){
                oneWeek.push(value)
            }
            //if end of week, push cells to rows and initialize cells array to empty
            //push the current Day to next week
            else{
                weeks.push(oneWeek)
                oneWeek = []
                oneWeek.push(value)
            }
            if(index === fullMonth.length - 1){
                weeks.push(oneWeek)
            }
        })

        let daysInMonth = weeks.map((value, index) => {
            return <tr>{value}</tr>
        })
        
        return daysInMonth
    }

    return(
        <div>
            <Month date={dateObject}/>
            <table cellspacing="0" cellpadding="0" id="calendar-table">
                <CalendarHead />
                <tbody>
                    {createMonthTable()}
                </tbody>
            </table>
        </div>    
    )
}

export default Calendar