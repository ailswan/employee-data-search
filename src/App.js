import React from 'react';
import employeeData from './data/employeeData.js';
import Search from '../src/component/searchbar.jsx';
import Results from '../src/component/results.jsx';
import DropdownDepart from './component/filterDepartment.jsx';
import DropdownAge from './component/filterAge.jsx';

import './styles/App.css';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: employeeData,
      department:'All',
      age:'All'
    };
  }

  changeResult(e,department,age) {
    //console.log(e);
    this.setState({employees:e,department:department,age:age});
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h2> Employee Information System</h2>
            <Search onSearch={this.changeResult.bind(this)}/>
            <DropdownDepart onSearch={this.changeResult.bind(this)} currentAge={this.state.age}/>
            <DropdownAge  onSearch={this.changeResult.bind(this)} currentDepartment={this.state.department}/>
            <Results searchResult={this.state.employees}/>
            
          </header>
        </div>
      </div>
    );
  }
}

export default App;
