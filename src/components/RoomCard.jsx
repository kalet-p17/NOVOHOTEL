import React from "react";
import"./RoomCard.css";

export default function RoomCard({img, price, title,description}) {
    return(
       <article className="roomcard">
        <img src={img} alt={title} />
        <div className="room-info">
            <h3>{title}</h3>
            <p className="price">${price} <span>noche</span> </p>
            <p className="desc">{description}</p>
            <button className="btn-primary">reservar</button>

        </div>
       </article>
    )
}
