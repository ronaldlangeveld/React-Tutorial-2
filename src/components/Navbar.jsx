import React, { Component } from "react";

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Total is {this.props.totalCounters}</a>

                </nav>
            </div>
        );
    }
}

export default Navbar;
