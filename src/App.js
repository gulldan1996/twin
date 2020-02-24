import React from "react";
import "./App.css";
import Spinner from "./Components/Spinner";

const RepeatButton = props => {
  return (
    <button
      aria-label="Play again."
      id="repeatButton"
      onClick={props.onClick}
    ></button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null
    };
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
    this._child4.forceUpdateHandler();
    this._child5.forceUpdateHandler();
  }

  static matches = [];

  finishHandler(value) {
    App.matches.push(value);

    if (App.matches.length === 5) {
      const first = App.matches[0];
      let results = App.matches.every(match => match === first);
      this.setState({ winner: results });
    }
  }

  emptyArray() {
    App.matches = [];
  }


  render() {
    const { winner } = this.state;
    let repeatButton = null;

    if (winner !== null) {
      repeatButton = <RepeatButton onClick={this.handleClick} />;
    }

    return (
      <div>
        <div className={`spinner-container`}>
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child1 = child;
            }}
            timer="1000"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child2 = child;
            }}
            timer="1200"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child3 = child;
            }}
            timer="1400"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child4 = child;
            }}
            timer="1800"
          />
          <Spinner
            onFinish={this.finishHandler}
            ref={child => {
              this._child5 = child;
            }}
            timer="2000"
          />
          <div className="gradient-fade"></div>
        </div>
        {repeatButton}
      </div>
    );
  }
}

export default App;
