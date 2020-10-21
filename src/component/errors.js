import React from 'react'

export default function Errors({msg}) {
    return (
        <div className="error-cont">
            <p className="error">{msg}</p>
        </div>
    )
}
