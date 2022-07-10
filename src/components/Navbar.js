import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Navbar(props) {
    return (
        <div className="navbar">
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Total Todos: {props.todos.length}</li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.myTodos.todos
})

export default connect(mapStateToProps, {})(Navbar)
