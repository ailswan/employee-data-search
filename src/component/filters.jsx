import React from 'react';
import '../styles/filters.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      showMenu: false,
    }

     
  }

  showMenu(event) {
    if (this.state.showMenu === false) {
      this.setState({
        showMenu: true,
      });
    } else {
      this.setState({ showMenu: false });
    }
  }

  render() {
    return (
      <div>
        <button  onClick={this.showMenu.bind(this)}>
          Department Filters
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
       
    );
  }
}


// ReactDOM.render(<Dropdown title="Dropdown Menu" options={options} />, document.getElementById('mount'));

export default Dropdown;