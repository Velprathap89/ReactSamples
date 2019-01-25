import * as React from 'react';

class MyComponent extends React.Component{
    render(){
        return(
            <h1>My Name is Vetri</h1>
        )
    }
}

const MyStyle = {
    color: 'orange'
}

const HOC = WrapperComponent => class extends React.Component {
    render(){
        return(
            <div style={MyStyle}>
                <WrapperComponent></WrapperComponent>
            </div>
        )
    }
}

export default HOC(MyComponent)