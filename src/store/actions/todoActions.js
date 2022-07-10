import axios from "axios"

export const getTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => 
        dispatch({
            type: 'GET_TODOS',
            payload: res.data
        })
    ).catch(err => console.log(err))
}

export const markComplete = id => dispatch => {
    dispatch({
        type: 'MARK_COMPLETE',
        payload: id
    })
}

export const addTodo = newTodo => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    .then(() => 
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
    ).catch(err => console.log(err))
}

export const deleteTodo = id => dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => 
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    ).catch(err => console.log(err))
}
