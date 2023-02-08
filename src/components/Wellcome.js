import React from "react";

function Wellcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>let's workout to get someone gains </p>
            </div>
        </div>
    )
}

export default Wellcome