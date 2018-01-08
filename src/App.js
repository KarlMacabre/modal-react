import React, { Component } from 'react';
import './App.css';
import Button from './Button';
class App extends Component {
  state = {
    modalVisibility: false
  }

  showModal = () => {
    this.setState({
      modalVisibility: !this.state.modalVisibility
    })
  }

  render() {
    const { modalVisibility } = this.state;
    return (
      <div className="App">
        {
          modalVisibility ?
            <div className="modal-container">
              <Button text="Close" fonction={this.showModal} />
            </div>
            : null
        }
        <Button text="Open Modal" fonction={this.showModal} />
      </div>
    );
  }
}

export default App;
