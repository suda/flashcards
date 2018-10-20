import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

        this.toggleReveal = this.toggleReveal.bind(this);
    }

    toggleReveal() {
        this.props.toggleReveal();
    }

    render(props) {
        return (
            <div className="card-container">
                <div className={this.props.data.revealed ? "card revealed" : "card"} onClick={this.toggleReveal}>
                    <div className="front">
                        <div className="content">
                            <div className="title">{this.props.data.title}</div>
                            <div className="subtitle">{this.props.data.subtitle}</div>
                        </div>
                    </div>
                    <div className="front back">
                        <div className="content">
                            <div className="text">{this.props.data.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
