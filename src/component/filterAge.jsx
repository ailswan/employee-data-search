import React from 'react';
import '../styles/filters.css';
import searchDepartmentAge from '../data/searchDepartmentAge.js';

class DropdownAge extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {selectValue:'All'}
    
  }
   
  handleChange(e) {
  this.setState({selectValue:e.target.value});
  searchDepartmentAge(this.props.currentDepartment,e.target.value,this.props.onSearch);
  }

  render() {
    var message='Department Filter: You selected '+this.state.selectValue;
    return (
      <div>
      <select 
        value={this.state.selectValue} 
        onChange={this.handleChange.bind(this)} 
      >
        <option value='All'> All Age </option>
       <option value='20-30'>20-30</option>
        <option value='31-40'>31-40</option>
        <option value='41-50'>41-50</option>
      </select>
      <p>{message}</p>
      </div>        
    );
  }
}



// ReactDOM.render(<Dropdown title="Dropdown Menu" options={options} />, document.getElementById('mount'));

export default DropdownAge ;