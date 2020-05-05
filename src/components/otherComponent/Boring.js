import React, { Component } from 'react';

class Boring extends Component {
    render() {
        console.log(this.props);
        const output = this.props.stuffs;
        return (
            // this is JSX
            <div>
                <h1>HELLO DOJO</h1>
                <ul>
                    {output.map((value, ind) => <li key={ind} >{value}</li>)}
                </ul>
            </div>
        )
    }
}
export default Boring;