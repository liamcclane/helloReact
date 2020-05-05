import React, { Component } from 'react';
import './myNewComponent.css';

class MyNewComponent extends Component {
    render () {
        return (
            <div>
                <h1>
                    Inside this new component!!!
                </h1>
                <h1>SomeProp var passed though is</h1>
                <h1 className="makeMeRed">{this.props.someProp}</h1>
                <h6>
                    Yay for React, even though it isn't a frame work and is only a library...
                </h6>
                <div className="makeMeRed">{this.props.children}</div>
            </div>
        );
    }
}

export default MyNewComponent;