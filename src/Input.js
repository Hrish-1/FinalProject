import React from 'react'

const Input = (props) => {
    return (
            <div className = "">
                <p className = "mt-3">{props.name}</p>
                <input type="text" className = "form-control" style = {{height : "35px",width : "400px"}} />
            </div>
    )
}

export default Input
