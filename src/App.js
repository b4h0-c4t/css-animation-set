import React, { Component } from 'react';
import './App.css';
import CircleLoader from './CircleLoader.js';
import CircleLoaderAnother from './CircleLoaderAnother.js';
import CircleGradient from './CircleGradient.js';
import CircleWaves from './CircleWaves.js';
import CircleLoaderMarcky from './CircleLoaderMarcky.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CircleLoader />
        <CircleLoaderAnother />
        <CircleLoaderMarcky />
        <CircleGradient />
        <CircleWaves />
      </div>
    );
  }
}
