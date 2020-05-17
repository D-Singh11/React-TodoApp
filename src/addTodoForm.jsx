import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        content: ''
    }


    handleChange =(e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({             // this is used to empty the input field once todo is added
            content : ''
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="" className='h3'><h5 className='green-text' >Add new todo</h5></label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
                
            </div>
        )
    }
}

export default AddTodo
