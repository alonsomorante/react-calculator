import React from "react";

function Clear({text, action}) {
    return (
        <div className="clear-box" onClick={action}>
            {text}
        </div>
    )
}

export default Clear

