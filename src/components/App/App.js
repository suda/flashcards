import './App.css';

import React, {Component} from 'react'
import _ from 'lodash'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import data from '../../data/spanish'
import CardView from '../CardView/CardView'
import MenuView from '../MenuView/MenuView'

class App extends Component {
  matchOptions(data, match) {
    const path = (match.params[0] || '').replace(/\//g, '.')
    const options = path === '' ? data : _.get(data, path)
    return _.keys(options).map(key => {return {
      key: key,
      isView: !!options[key].items,
      path: path
    }})
  }

  matchData(data, match) {
    const path = (match.params[0] || '').replace(/\//g, '.')
    return path === '' ? data : _.get(data, path)
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/([\w\/]*)' exact={true} render={({match}) => (
            <MenuView options={this.matchOptions(data, match)}/>
          )} />
          <Route path='/([\w\/]*).html' render={({match}) => (
            <CardView data={this.matchData(data, match)} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App
