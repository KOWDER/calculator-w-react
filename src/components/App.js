import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      output: '_',
      sumEval: [],
    }
  }

  handleButtonClick = (e) => {
    const num = e.target.textContent;

    // if target is an display input
    if (e.target.dataset['type'] === 'number') {
      // if num is a number
      if (parseInt(num, 10) || num === '0') {
        this.setState(prevState => {
          if (prevState.output === '_') {
            return {
              output: num
            }
          } else {
            return {
              output: prevState.output + num
            }
          }
        })
      }
      // if num is a dot
      if (e.target.classList.contains('btn-dot')) {
        this.setState(prevState => {
          if (prevState.output[prevState.output.length - 1] !== "." && prevState.output !== '_') {
            return {
              output: prevState.output + num
            }
          } else if (prevState.output === '_') {
            return {
              output: 0 + '.'
            }
          } else {
            return
          }
        })
      }
    }


    // if target is an action
    if (e.target.dataset['type'] === 'action') {
      // if the action is a reset
      if (e.target.classList.contains('btn-ac')) {
        this.setState({
          output: '_',
          sumEval: []
        })
      }
      // if the action is a backspace
      if (e.target.classList.contains('btn-back')) {
        this.setState(prevState => {
          if (prevState.output !== '_' && prevState.output !== prevState.sumEval && prevState.output[prevState.output.length - 1] !== '.') {
            return {
              output: prevState.output.slice(0, -1) || '_'
            }
          } else if (prevState.output[prevState.output.length - 1] === '.' &&  prevState.output.length === 2) {
            return {
              output: prevState.output.slice(0, -2) || '_'
            }
          } else if (prevState.output[prevState.output.length - 1] === '.') {
            return {
              output: prevState.output.slice(0, -1) || '_'
            }
          }
        })
      }
    }


    // if the target is an operator
    if (e.target.dataset['type'] === 'operator' && parseFloat(this.state.output)) {
      // if its a +
      if (e.target.classList.contains('btn-plus')) {
        this.setState(prevState => {
          return {
            output: '_',
            sumEval: [...prevState.sumEval, parseFloat(prevState.output), "+"]
          }
        })
      }
      // if its a -
      if (e.target.classList.contains('btn-minus')) {
        this.setState(prevState => {
          return {
            output: '_',
            sumEval: [...prevState.sumEval, parseFloat(prevState.output), "-"]
          }
        })
      }
      // if its a *
      if (e.target.classList.contains('btn-multi')) {
        this.setState(prevState => {
          return {
            output: '_',
            sumEval: [...prevState.sumEval, parseFloat(prevState.output), "*"]
          }
        })
      }
      // if its a /
      if (e.target.classList.contains('btn-divide')) {
        this.setState(prevState => {
          return {
            output: '_',
            sumEval: [...prevState.sumEval, parseFloat(prevState.output), "/"]
          }
        })
      }
      // if we want to display the result
      if (e.target.classList.contains('btn-equal')) {
        this.setState(prevState => {
          return {
            output: eval([...prevState.sumEval, parseFloat(prevState.output)].join(' ')),
            sumEval: eval([...prevState.sumEval, parseFloat(prevState.output)].join(' '))
          }
        })
      }

    }
  }

  render() {
    const { output } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div className="calc-container">
          <Calculator output={output} handleBtn={this.handleButtonClick}/>
        </div>
      </div>
    );
  }
}

export default App;
