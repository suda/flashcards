import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props) {
        return (
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>
                    <img src="/assets/images/sync.svg" />
                </button>
            </div>
        )
    }
}

export default DrawButton