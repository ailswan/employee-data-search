import React from 'react';
import '../styles/search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSearch(e){
    this.setState({name:''});
  }


  handleSubmit(e){
    e.preventDefault();
    // searchData(this.state.name, this.props.onSearch);
  }


  render() {
    return (
      <div>
        <input
        type='text' 
        className='search-bar' 
        value={this.state.name}
        placeholder='Employee Name'
        onChange={this.handleSearch.bind(this)}
        />
        <button className='search-button' onClick={this.handleSubmit.bind(this)}> SEARCH </button>
      </div>
    );
  };
}

export default Search;