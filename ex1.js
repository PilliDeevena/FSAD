import React, { Component } from 'react';

class ex1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            grade:'',
        };
    }
    handleChange=(e)=>{
        this.setState({[e.taarget.name]:e.target.value});
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submitted:',this.state)
    };
    render() {
        return (
            <div>
                <h2>Student details</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label >
                        Age:
                        <input type="text" 
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>
            Grade:
            <input
              type="text"
              name="grade"
              value={this.state.grade}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default ex1;
