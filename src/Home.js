import * as React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Your name is: {this.props.name}</div>
        <div>Your age is: {this.props.age}</div>
      </div>
    );
  }
}
