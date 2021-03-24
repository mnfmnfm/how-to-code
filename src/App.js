import './App.css';
import React from 'react';
// we get to import other people's code now
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import data from './data.json';

class App extends React.Component {
  // state: lets us store information within a component that's going to change
  constructor(props) {
    // this is always the first line of our constructor within a Component
    super(props);
    // setting the state to be an object
    // we can ONLY set the state this way, with =, once, in the constructor
    this.state = {
      numberOfExclamationPoints: 1,
      // other things allowed too!
      showModal: false
    };

    console.log(data.map(beast => beast.title));
  }

  buttonClicked = () => {
    console.log('button clicked!');
    // sadly, we cannot just write:
    // this.state.numberOfExclamationPoints++
    // instead, we call a setState method and pass in an object
    // the object contains the new values for the state
    this.setState({
      numberOfExclamationPoints: this.state.numberOfExclamationPoints + 1
    });
  }

  showModal = () => {
    this.setState({showModal: true});
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  // jsx is weird!
  render() {
    // TODO: use map
    let exclamationPoints = '';
    for (let i = 0; i < this.state.numberOfExclamationPoints; i++) {
      exclamationPoints += '!';
    }
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Get excited{exclamationPoints}</h2>
        <button onClick={this.buttonClicked}>Get more excited about learning to code by clicking here!</button>

        <Button variant="danger" onClick={this.showModal}>Open modal</Button>
        <Modal show={this.state.showModal} onHide={this.hideModal} >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default App;
