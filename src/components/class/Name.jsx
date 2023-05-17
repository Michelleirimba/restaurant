import React from 'react'

const Name =({firstname,lastname})=>{
    return(
        <div>
        <p>Jane Doe</p>
        <p>{firstname} {lastname}</p>
        </div>
    )
}

export default Name