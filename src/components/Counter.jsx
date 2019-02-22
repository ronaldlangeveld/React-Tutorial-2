import React, { Component } from "react";

class Counter extends Component {

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // }

    render() {
        console.log('props', this.props);
        return (
            <div>
                <span className="badge badge-primary m-2">{this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}

export default Counter;