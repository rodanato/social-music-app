import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Starship from './starship'

class App extends Component {
  url = 'http://swapi.co/api/starships/';
  starships;
  
  constructor(props) {
    super(props);
    this.state = {
      starships: []
    };
  };

  loadStarships () {
    const _this = this;
    
    fetch(this.url).then(function(response) {
      return response.json();
    }).then((json) => {
      _this.setState({
        starships: json.results
      });
    });
  }

  alertSize(val) {
    alert('Starship ' + val);
  }

  sayHello() {
      alert('Hello, ' + this.name);
  }

  tellSpeed(value) {
    alert(this.name + ' speed: ' + this.speed + value);
  }

  setStarshipsList() {
    return this.state.starships.map((starship, i) => {
      return (
        <Starship data={starship} 
          key={i}
          onBlur={this.tellSpeed}
          onClick={this.alertSize.bind(this)} />    
      );
    });
  }

  componentDidMount() {
    this.loadStarships();
  }

  render() {
    return (
      <div className="App">
        <ul>{this.setStarshipsList()}</ul>
      </div>
    );
  }
}

export default App;
