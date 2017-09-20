import 'rxjs/add/operator/map';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import Search from "./search";
import VisibleStarshipList from "../containers/starship-list";

class StarshipsLibrary extends Component {
  url = 'http://swapi.co/api/starships/';

  constructor (props) {
    super(props);

    this.state = {
      starshipsList: []
    };
  }

  loadStarships () {
    fetch(this.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          starshipsList: data.results
        });
      });
  }

  componentDidMount () {
    this.loadStarships();
  }

  render () {
    return (
      <div>
        <Search />
        <VisibleStarshipList list={this.state.starshipsList} />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)



const RouterApp = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/library">Library</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/library" component={StarshipsLibrary}/>
      </div>
    </Router>
  );
};

export default RouterApp;