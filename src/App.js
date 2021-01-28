import React from 'react';
import employeeData from './data/employeeData.js';
import Search from '../src/component/searchbar.jsx';
import Results from '../src/component/results.jsx';
import Dropdown from '../src/component/filters.jsx';

import './styles/App.css';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employee:{
        name:'',
        department:'',
        age:''
      },
      employees: employeeData};
  }

  changeResult(e) {
    this.setState({employee:e});
  }


  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h2> Employee Information System</h2>
            <Search onSearch={this.changeResult.bind(this)}/>
            <Dropdown />
            <Results />
            
          </header>
        </div>
      </div>
    );
  }
}

export default App;
