import React from "react"

function Day(props){

    return (
        props.dayNum === " " ? 
        <td class="blank-day">{props.dayNum}</td> :
        <td class="day">{props.dayNum}</td>
    )
}

export default Day