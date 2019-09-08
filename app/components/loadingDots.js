import React from "react";

const LoadingDots = (props) => {

    console.log(props)

    return (
        
        <div className={"loading-dots"}>

            <span style={{fontSize: props.size}}>.</span>
            <span style={{fontSize: props.size}}>.</span>
            <span style={{fontSize: props.size}}>.</span>
        
        </div>
    )
}

export default LoadingDots
