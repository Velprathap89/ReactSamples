import * as React from 'react';

export default class LastName extends React.PureComponent {
    render(){
        console.log("lastName refreshed");
        return(<h1>My LastName is: {this.props.name}</h1>)
    }    
}