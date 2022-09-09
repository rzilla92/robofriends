import React from "react";


const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', margin: '0 10px 0 10px', padding: '10px', border: '5px solid #0CCAC4', borderRadius: '15px', height: '720px'}}>
                {props.children}
        </div>
    )
}

export default Scroll