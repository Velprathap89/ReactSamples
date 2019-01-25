import React, { Component, Fragment } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import './App.css';

class PureComponentDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Vel',
      lastName: 'Prathap'
    }
  };
  render() {
    // const user = {
    //   name: "Vetri",
    //   age: 30
    // }
    // setTimeout(
    //   () => {
    //     this.setState({ firstName: "Vetri" });
    //   }, 1000);

    return (
      <Fragment>
        <FirstName name={this.state.firstName}></FirstName>
        <LastName name={this.state.lastName}></LastName>
      </Fragment>
    );
  }
}

export default PureComponentDemo;
