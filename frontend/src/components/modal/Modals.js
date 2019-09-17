import { Button, Modal , } from 'react-bootstrap';
import React, { Component } from 'react';
import Calendario from '../calendario/Calendario';

class Modals_2 extends Component{
  constructor(props){
    super(props);
  }
}

class Modals  extends Component {

      constructor(props) {
        super(props);
        };
      state = {
        show: false,
        setShow: true
      }
      handleClose = () => this.setState({
        show:false,
      });
      handleShow = () => this.setState({
         show:true,
      });
      someMethod() {
        console.log('bar');
    }
      updateState(){
        this.state = {
          show:true
        }
      }
      render(){
        return(
          <div>
      <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!
          <div>
          <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
        
        
        </div>
        
        );
        
      }
    }

  export default Modals