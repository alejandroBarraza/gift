import React from 'react'

export const GiftGridItem = ({url,title}) => {
    
    return (
        <div className= 'card' >
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
