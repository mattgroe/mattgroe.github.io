import React, { Component } from 'react';
import { css } from 'glamor';
import './App.css';

import Router from './Router';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        show: 0
    }
  }

  render() {

    let flex = css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    })

    return (
      <div className="App" {...flex}>
          <Router path="/" component="Home"/>
          <Router path="/web" component="Web"/>
          <Router path="/software" component="Software"/>
          <Router path="/contactme" component="Contact"/>
      </div>
    );
  }
}

export default App;
