import React, { Component } from 'react';
import { css } from 'glamor';
import './App.css';

import FrontPage from './FrontPage/FrontPage';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

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

          {/* Main page */}
          <FrontPage/>

      </div>
    );
  }
}

export default App;
