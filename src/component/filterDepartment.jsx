import React from 'react';
import '../styles/filters.css';
import searchDepartmentAge from '../data/searchDepartmentAge.js';

class DropdownDepart extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {selectValue:'All'}
    
  }
   
  handleChange(e) {
  this.setState({selectValue:e.target.value});
  console.log(this.props.currentAge);
  searchDepartmentAge(e.target.value,this.props.currentAge,this.props.onSearch);
  }

  render() {
    var message='Age Filter: You selected '+this.state.selectValue;
    return (
      <div>
      <select 
        value={this.state.selectValue} 
        onChange={this.handleChange.bind(this)} 
      >
        <option value="All">All</option>
        <option value="Music">Music</option>
        <option value="Film">Film</option>
        <option value="Sports">Sports</option>
      </select>
      <p>{message}</p>
      </div>        
    );
  }
}


// ReactDOM.render(<Dropdown title="Dropdown Menu" options={options} />, document.getElementById('mount'));

export default DropdownDepart;