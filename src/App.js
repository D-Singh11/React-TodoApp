import React from 'react';
import Todo from './todo'
import AddTodo from './addTodoForm'


class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Do first this thing" },
      { id: 2, content: "Do second this thing" },
      { id: 3, content: "Do third this thing" },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id != id
    });
    this.setState({
      // todos: todos 
      // if property name and value both have same name then we can do the following line instaed of above
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className='blue-text center'>SSA</h1>
        <AddTodo addTodo={this.addTodo} />
        <div>
          <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      </div>

    )
  }
}

export default App;
