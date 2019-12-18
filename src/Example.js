import React, { Component } from 'react'
import { allExample} from './auth/api'
export default class Example extends Component {

    state={
        examples: []
    }

    componentDidMount(){
        allExample().then(res => this.setState({examples: res.data.examples}))
    }
    render() {
        console.log('====================================');
        console.log(this.state.examples);
        console.log('====================================');
        let all = this.state.examples.map(ex => {
            return( <div key={ex._id}>
                <h1>{ex.title}</h1>
                <h3>{ex.text}</h3>
            </div>

            )
        })
        return (
            <div>
                {all}
            </div>
        )
    }
}
