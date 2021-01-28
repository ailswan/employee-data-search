import React from 'react';
import '../styles/search.css';
// import searchData from '../data/searchData.js';
import searchName from '../data/api.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleSearch(e){
    this.setState({name:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    //console.log(this.state.name + ' is submited!');
    // searchData(this.state.name, this.props.onSearch);
    searchName(this.state.name, this.props.onSearch);
  }

  render() {
    return (
      <div>
        <input
        type='text' 
        className='search-bar' 
        placeholder='Employee Name'
        onChange={this.handleSearch.bind(this)}
        />
        <button className='search-button' onClick={this.handleSubmit.bind(this)}> SEARCH </button>
      </div>
    );
  };
}

export default Search;