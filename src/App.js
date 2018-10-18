import './App.css';

import React, {Component} from 'react';

import Card from './Card/Card';
import data from './Data/cards'
import DrawButton from './DrawButton/DrawButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    let cards = [];
    const pronouns = [
      'yo', 'tú', 'él\nella\nusted', 'nosotros\nnosotras', 'vosotros\nvosotras',
      'ellos\nellas\nustedes'
    ];

    for (let verb of data.conjugation) {
      for (let i=0; i<pronouns.length; i++) {
        cards.push({
          'text': verb.list[i],
          'title': pronouns[i],
          'subtitle': verb.verb
        });
      }
    }

    this.state = { cards: cards, currentCard: {} }
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState(
        {cards: currentCards, currentCard: this.getRandomCard(currentCards)});
  }

  getRandomCard(currentCards) {
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    if (card === this.state.currentCard) {
      this.getRandomCard(currentCards)
    }

    return (card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState(
        {cards: currentCards, currentCard: this.getRandomCard(currentCards)})
  }

  render() {
    return (
      <div className='App'>
        <div className='cardRow'>
          <Card data={
      this.state.currentCard} />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={
      this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
