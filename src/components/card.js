import React, { Component } from 'react';
import Input from './input';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "BLUE",
      pluralNoun: ""
    }

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({
      color: 'red'
    })
  }
  
  render() {

    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        <input />
      </div>
    )

    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        { Input('Color') }
        { Input('Plural Noun') }
      </div>
    );
  }
}

export default Card;