import * as React from 'react';

export default class FirstName extends React.Component {
    render(){
        console.log("firstName refreshed");
        return(<h1>My FirstName is: {this.props.name}</h1>)
    }    
}