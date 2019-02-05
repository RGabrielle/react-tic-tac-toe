import React, { Component } from 'react';
import Case from './Case';

export default class Plateau extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cases: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const cases = this.state.cases.slice();
    cases[i] = 'X';
    this.setState({cases: cases});
  }

  renderCase(i) {    
    (
      <Case
        value={this.state.cases[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Prochain joueur : X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="plateau-row">
          {this.renderCase(0)}
          {this.renderCase(1)}
          {this.renderCase(2)}
        </div>
        <div className="plateau-row">
          {this.renderCase(3)}
          {this.renderCase(4)}
          {this.renderCase(5)}
        </div>
        <div className="plateau-row">
          {this.renderCase(6)}
          {this.renderCase(7)}
          {this.renderCase(8)}
        </div>
      </div>
    );
  }
}