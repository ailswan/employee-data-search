import React from 'react';
import '../styles/result.css';
import Resultname from '../component/resultname.jsx';
 

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {employees: this.props.searchResult};
  }

  render() {
    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
       
          {this.props.searchResult.map(employee => {
            return (
             <Resultname key={employee.name} employee={employee} />
            );
          })}

        </tbody>
      </table>
      </div>
    );
  };
}

export default Results;