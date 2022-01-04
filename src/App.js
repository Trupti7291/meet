import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

class App extends Component {
  render() {
    return (
      <ul className="App">
        <CitySearch />
        <EventList />
      </ul>
    );
  }
}

export default App;
