import React from 'react'
import moment from 'moment'


function Month(props){
    const getMonth = () => {
        return props.date.format("MMMM")
    }

    return (
        <div>
            {getMonth()}
        </div>
    )
}

export default Month