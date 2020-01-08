import React, { Component } from 'react';
import Card from './components/card';
import './App.css';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data, score: 0, topScore: 0 };
  }


  componentDidMount() {
    this.setState({ data: this.mixUpData(this.state.data) })

  }
  handleGuessRight = newData => {
    const topScore = this.state.topScore
    const score = this.state.score
    const newTopScore = Math.max(score + 1, topScore)
    this.setState({
      data: this.mixUpData(newData),
      score: score + 1,
      topScore: newTopScore,
    })

  }
  handleGuessWrong = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    })

  }
  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.mixUpData(resetData);
  }
  mixUpData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };
  handleItemClick = id => {
    let rightGuess = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item }
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          rightGuess = true;

        }
      }
      return newItem
    })
    if (rightGuess === true) {
      this.handleGuessRight(newData)
    } else {
      this.handleGuessWrong(newData)
    }

  }
  render() {
    return (
      <div>
        <h2> Work that brain! </h2>
        <h4> Click on each team but don't click the same team twice!</h4>
        <h3> Score: {this.state.score} </h3>
        {this.state.data.map(item => (
          <Card
            id={item.id}
            width={100}
            height={100}
            front={item.pic}
            handleClick={this.handleItemClick}
          />
        ))}

      </div>
    );
  }
}

export default App;