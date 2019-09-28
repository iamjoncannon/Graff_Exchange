import React from "react";

const LoadingDots = (props) => {

    const style = {
        display: "inline", 
        color: "black", 
        fontSize: props.size
    }

    return (
        
        <div className={"loading-dots"}>
            <span style={style}>.</span>
            <span style={style}>.</span>
            <span style={style}>.</span>        
        </div>
    )
}

export default LoadingDots
