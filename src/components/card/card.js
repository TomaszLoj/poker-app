import React from 'react'
import './card.css';


export default function Card({suit, value, weight, url}){
    //console.log(url)
    return (
        <div className="Card" >
            <img src={url} alt={suit} />
        </div>
    )
}
