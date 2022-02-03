import React from "react";

function Button({label}){
    return <div data-testid='button' className="btn">{label}</div>
}

export default Button;