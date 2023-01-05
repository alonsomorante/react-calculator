import React from "react";

function Boton(props) {
    return (
        <div className="boton-box" onClick={() => props.pickNumber(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton