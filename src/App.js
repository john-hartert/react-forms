import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'chris is a dork',
      label: 'magic form things'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.label}</h1>
        <input type="text" value={this.state.text} onChange={this._updateText} />
        <div>This will show a thing</div>
      </div>
    );
  }
  _updateText = () => {
    this.setState({
      text: `???wha huh omgz`
    });
  }
}



export default App;

// const App = (props) => (
//   <div className="App">
//     <input type="text" />
//     <div>This will show a thing</div>
//   </div>
// );

// import WorldClock from './WorldClock';

// const firstClocks = {
//     cities: {
//       Atlanta: {
//         tz: 'America/New_York'
//       },
//       'New York': {
//         tz: 'America/New_York'
//       },
//       Tokyo: {
//         tz: 'Asia/Tokyo'
//       },
//   }
// };

// const secondClocks = {
//     cities: {
//       Manila: {
//         tz: 'Asia/Manila'
//       },
//       'Mexico City': {
//         tz: 'America/Mexico_City'
//       },
//       'Berlin': {
//         tz: 'Europe/Berlin'
//       },
//     }
// };