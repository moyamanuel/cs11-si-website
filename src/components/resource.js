import React from 'react'

export default (props) => {
    let resourceList = props.resources.map((resource) => 
        <li>{resource}</li>
    )

    return (
        <div>
            <h1>{props.week}</h1>
            <p>{props.resources}</p>
            <ul>
                {resourceList}
            </ul>
        </div>
    )
}