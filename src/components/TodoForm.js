import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../store/actions/todoActions'

function TodoForm({ addTodo }) {

    const [title, setTitle] = useState('')

    const onTitleChange = e => {
        setTitle(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault()

        if(title !== ''){
            const newTodo = {
                id: uuidv4,
                title,
                completed: false
            }

            addTodo(newTodo)
            setTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    name="title"
                    onChange={onTitleChange}
                    value={title}
                />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {addTodo})(TodoForm)

