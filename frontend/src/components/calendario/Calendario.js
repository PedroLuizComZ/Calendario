import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from '../modal/Modals';

class Calendario extends Component {
  state = {
    date: new Date(),
  }

  render() {
    return (
      <div className="calendar-container">
        <Calendar
          onChange={this.onChange}
          onClickDay={this.showEvent}
          value={this.state.date}
        />
        <Modals />
        
      </div>
    );
  }


  onChange = date => this.setState({ date })

  showEvent = () => {
    this.setState({
      show:true,
   });
  }
}

export default Calendario