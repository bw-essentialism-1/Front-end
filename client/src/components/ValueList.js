import React from "react";


const ValueList = ({ essentials }) => {

    return(
        <div>
            <h1>values</h1>
            {
             essentials.map(item => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                </div>
            ))
            }
        </div>        
    )
}

export default ValueList
