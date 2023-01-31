import React from "react"

export const Album = (props) => {
    return (
            <a href={props.url}>{props.name}</a>    
    )
}
