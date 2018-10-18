import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="content">
                    <div className="title">{props.data.title}</div>
                    <div className="subtitle">{props.data.subtitle}</div>
                </div>
            </div>
            <div className="front back">
                <div className="content">
                    <div className="text">{props.data.text}</div>
                </div>
            </div>
        </div>
    </div>
)

export default Card
