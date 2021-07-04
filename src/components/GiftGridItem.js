import React from 'react'

export const GiftGridItem = ({url,title}) => {
    
    return (
        <div className= 'card animate__animated animate__bounce' >
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
