import React from 'react'
import Entry from './Entry';
import { get } from '../utils/jsonStorage'

class List extends React.Component {
    state = { entries: [] }

    componentDidMount() {
        get().then((response) => this.setState({entries: response.data}))
    }

    render() {
        return(
            <section>
                <h2>List</h2>
                <ul>
                    {this.state.entries.map((entry) => <Entry key={entry.id} {...entry} />)}
                </ul>
            </section>
        )
    }
}

export default List
