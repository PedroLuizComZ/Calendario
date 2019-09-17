import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendario.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
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
      </div>
    );
  }

  onChange = date => this.setState({ date })

  showEvent = () => {
    console.log("CLiquei no dia")
  }
}

export default Calendario