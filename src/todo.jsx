import React from 'react'

const Todo = ({ todos, deleteTodo }) => {

    return (
        <div className='todo collection'>
            {todos.length ? (todos.map(todo => (
                <div className="collection-item" key={todo.id} >
                    <p onClick={() => {deleteTodo(todo.id)}}>{todo.content}</p>
                    {/* <button className='right'>x</button> */}
                </div>
            )))
                : <p className='center'>You have no todos left</p>}
        </div>
    )
}

export default Todo
