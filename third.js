import React, { Component } from "react";
const C = class Third extends Component {
    constructor() {
        super()
        this.state = {
            name: 0
        }
    }
    increment = () => {
        this.setState({
            name: this.state.name + 1
        })
    }
    decrement = () => {
        this.setState({
            name: this.state.name - 1
        })
    }
    render() {
        return (
            <div align="center">
                <table class="table1">
                    <tr>
                        <td>
                            <button onClick={this.increment}>+</button>
                            &nbsp;&nbsp;&nbsp;
                        </td>
                        <td>
                            <h1>{this.state.name}</h1>
                        </td>
                        <td>
                            <button onClick={this.decrement}>-</button>
                        </td>
                    </tr>
                </table>

            </div>

        )
    }
}
export default C;