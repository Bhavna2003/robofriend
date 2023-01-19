import React from "react";
import './Card.css';

const Card = ({ name, id, email }) => {
    return (
        <div class="card">
            <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;