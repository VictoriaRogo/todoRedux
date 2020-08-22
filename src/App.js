import React from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";
import {connect} from 'react-redux';


function App(props) {
    return (
        <div className="App">
            <Form addItem={props.addTodo}/>
            <List
                todoItems={props.todos}
                toggle={props.toggleTodo}
                updateTitle={props.updateTodo}
                deleteItem={props.deleteTodo}
                swap={props.swapTodo}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    toggleTodo: (index) => dispatch({type: 'TODO_TOGGLE', payload: index}),
    updateTodo: (index, title) => dispatch({type: 'TODO_UPDATE', payload: {index, title}}),
    deleteTodo: (index) => dispatch({type: 'TODO_DELETE', payload: index}),
    swapTodo: (index1, index2) => dispatch({type: 'TODO_SWAP', payload: {index1, index2}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);