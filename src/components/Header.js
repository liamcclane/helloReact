import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { first, last } = this.props;
        return (
            <div>The following with names First, Last
                <ul>
                    <li><h3>{first}</h3></li>
                    <li><h6>    {last}</h6></li>
                </ul>
            </div>
        );
    }
    /**Alternatively the above code is destructed,
     * render () {
     * 
     *      returns (
     *          <div>{this.props.first}, {this.props.last}</div>
     *      );
     * }
     * 
     * 
     */
}

export default Header;