import React from "react";

const XandO = (props) => {

    return (
        <span className={props.spanClass}
        onClick={() => props.onClick(props.index)}>
            {props.state}
        </span>
    )
}

export default XandO