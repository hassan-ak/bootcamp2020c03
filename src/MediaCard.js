import React from 'react'

export const MediaCard = (props) => {
    return (
        <div>
            <h1>{props.head}</h1>
            <p>{props.para}</p>
            <img src={props.url} alt="2018 GL1800" width = "300px"></img>
            
        </div>
    )
}
