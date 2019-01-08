import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';

class ReduxDemo extends React.Component {
    render(){
        const reducer = function(state, action){
            if(action.type === "ATTACK"){
                return action.payload;
            }
            if(action.type === "GREEN_ATTACK"){
                return action.payload;
            }
            return state;
        }
        const myLogger = (store) => (next) => (action) => {
            console.log("Logged Action", action);
            next(action);
        }
        const store = createStore(reducer, 'peace', applyMiddleware(myLogger));
        store.subscribe(() => {
            console.log("Get the current state", store.getState());
        });
        store.dispatch({type:"ADD", payload:"Iron Man"});
        store.dispatch({type:"SUB", payload:"Hulk"});
        return(
            <div>test</div>
        )
    }
}

export default ReduxDemo