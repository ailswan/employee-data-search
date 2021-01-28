import React from 'react';
import '../styles/result.css';
import Resultname from '../component/resultname.jsx';


class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

  }

  render() {
    return (
      <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          <Resultname />
        </tbody>
      </table>
      </div>
    );
  };
}

export default Results;