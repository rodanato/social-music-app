import React, { Component } from 'react';
import { connect } from 'react-redux'
import { search } from '../actions/';

class Search extends Component {
  searchValue = '';

  render () {
    return (
      <form>
        <input type="text"
               onKeyUp={() => {
                 this.props.dispatch(search(this.searchValue.value));
               }}
               ref={node => this.searchValue = node}/>
      </form>
    );
  }
};

Search = connect(dispatch => dispatch)(Search);

export default Search;