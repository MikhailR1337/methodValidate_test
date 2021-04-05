import React, { Component } from 'react';
import Validate from './components/Validate';

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <h1>Hello</h1>
            <Validate>
              <Validate>
                <Validate>
                  <Validate></Validate>
                </Validate>
              </Validate>
            </Validate>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
