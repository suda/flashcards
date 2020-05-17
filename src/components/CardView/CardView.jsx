import React, { Component } from 'react'

import Card from '../Card/Card'
import DrawButton from '../DrawButton/DrawButton'
import Nav from '../Nav/Nav';

class CardView extends Component {
    constructor(props) {
        super(props)

        this.toggleReveal = this.toggleReveal.bind(this)
        this.updateCard = this.updateCard.bind(this)
    }

    componentWillMount() {
        const deck = this.buildDeck(this.props.data)
        this.setState({
            deck: deck,
            currentCard: this.getRandomCard(deck, this.state),
            revealed: false
        })
    }

    buildDeck(data) {
        let deck = []
        const pronouns = [
            'yo', 'tú', 'él\nella\nusted', 'nosotros\nnosotras', 'vosotros\nvosotras',
            'ellos\nellas\nustedes'
        ]

        for (let verb of data.items) {
            for (let i = 0; i < pronouns.length; i++) {
                deck.push({
                    'text': verb.list[i],
                    'title': pronouns[i],
                    'subtitle': verb.verb
                })
            }
        }
        return deck
    }

    updateCard() {
        const deck = this.state.deck

        if (this.state.revealed) {
            this.toggleReveal()
        }

        setTimeout(this.setState.bind(this, {
            deck: deck,
            currentCard: this.getRandomCard(deck, this.state)
        }), 200)
    }

    toggleReveal() {
        let revealed = this.state.revealed
        revealed = !revealed;
        this.setState({
            deck: this.state.deck,
            currentCard: this.state.currentCard,
            revealed
        })
    }

    getRandomCard(deck, state) {
        var randomIndex = Math.floor(Math.random() * deck.length)
        var card = deck[randomIndex]
        if (state && card === state.currentCard) {
            this.getRandomCard(deck)
        }

        return card
    }

    render(props) {
        return (
            <div>
                <Nav />
                <div className='cardRow'>
                    <Card data={this.state.currentCard} toggleReveal={this.toggleReveal} revealed={this.state.revealed} />
                </div>
                <div className='buttonRow'>
                    <DrawButton drawCard={this.updateCard} />
                </div>
            </div>
        )
    }
}

export default CardView
