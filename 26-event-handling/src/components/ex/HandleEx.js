import React, { Component } from 'react';

class HandleEx extends Component {
  state = {
    hello: 'Hello World!',
  };

  changeText = (text) => {
    this.setState({ hello: text });
  };
  render() {
    const { hello } = this.state;
    return (
      <div>
        <h1>{hello}</h1>
        <button onClick={() => this.changeText('GoodBye World!')}>클릭!</button>
      </div>
    );
  }
}
export default HandleEx;
