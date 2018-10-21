// Instalirati react developer tools

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {  
    counters : [
        {id: 1, name : "first", value : 0},
        {id: 2, name : "second", value : 0},
        {id: 3, name : "third", value : 2}
    ]
};

constructor(props) {
  super(props);
  // U konstruktoru mozemo postavljati state direktno. moramo slati props u konstrutkrou 
  // this.state.x = this.props.dfgfg
}

componentDidMount() {
  // poziva se nakon render metode
  // sluzi za ajax callove 
  // this.setState()
}

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
    console.log(this.state.counters[index]);
}

handleDelete = counterId =>
{
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({counters : counters});
}
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        >
        </NavBar>
        <main className= "container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
