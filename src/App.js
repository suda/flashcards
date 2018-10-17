import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {} 
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    currentCards
        .push({
          id: 1,
          eng: 'amo',
          han: 'yo',
          pin: 'amor',
        })
        .push({
          id: 1,
          eng: 'amas',
          han: 'tu',
          pin: 'amor',
        })

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards){
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }

    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            pin={this.state.currentCard.pin}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
