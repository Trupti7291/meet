import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: []
  }
  render() {
    return (
      <ul className="App">
        <CitySearch />
        <EventList events={this.state.events} />
        <NumberOfEvents />
      </ul>
    );
  }
}

export default App;
