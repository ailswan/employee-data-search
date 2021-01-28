import React from 'react';
import '../styles/result.css';


class Resultname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

  }

  render() {
    return (
        <tr>
          <th scope="row">1</th>
          <td>Anne Hathaway</td>
          <td>Film</td>
          <td>38</td>
        </tr>
    );
  };
}

export default Resultname;