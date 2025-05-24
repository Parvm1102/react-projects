import React from "react";

function Button(props) {
    
    return (
        <span onClick={() => props.setColor(props.color)} className="p-3 rounded-3xl w-full flex items-center justify-center text-3xl" style = {{backgroundColor: props.color}}>
            {props.color}
        </span>
    )
}

export default Button;