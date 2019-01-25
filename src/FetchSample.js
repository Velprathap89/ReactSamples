import * as React from 'react';

export default class FetchSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }
    }
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=500')
            .then(response => response.json())
            .then(resData => {
                this.setState({ person: resData.results });
            })
    }
    render() {
        return (
            <ul>
                {
                    this.state.person.map((personRecord) => {
                        return <li key={personRecord.id.value}> {personRecord.name.first} </li>
                    })
                }
            </ul>
        );
    }
}