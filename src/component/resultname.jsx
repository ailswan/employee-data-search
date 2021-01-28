import React from 'react';
import '../styles/result.css';


class Resultname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
    };

  }

  render() {
    return (
        <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.department}</td>
          <td>{this.props.employee.age}</td>
        </tr>
        
    );
  };
}

export default Resultname;