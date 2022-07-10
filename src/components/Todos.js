import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TodoForm from './TodoForm'
import { 
    getTodos, 
    markComplete, 
    deleteTodo 
} from '../store/actions/todoActions'

function Todos({
    todos, 
    markComplete, 
    deleteTodo,
    getTodos
}) {

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="todo-list">
            <TodoForm/>
            <ul>
                {todos.map(todo => 
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                        <input 
                        type="checkbox" 
                        onChange={markComplete.bind(this, todo.id)}
                        checked={todo.completed}
                        />
                        <button 
                        onClick={deleteTodo.bind(this, todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, {getTodos, markComplete, deleteTodo})(Todos)
