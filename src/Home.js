import * as React from "react";

export default class Home extends React.Component {
  render() {
    const user = {
        name: "Vetri",
        age: 30
    }
    return (
      <div>
        <div>Your name is: {user.name}</div>
        <div>Your age is: {user.age}</div>
      </div>
    );
  }
}
