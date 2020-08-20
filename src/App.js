import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";
import {connect} from 'react-redux';

const initialState = [
    {title: 'First', done: false},
    {title: 'Second', done: false},
    {title: 'Third', done: false}
];

function App(props) {
    const [list, setList] = useState(initialState);
    const addItem = (e) => {
        e.preventDefault();
        props.addTodo(e.target[0].value);
        e.target[0].value = '';
    };
    const toggle = (i) => {
        props.todos[i].done = !props.todos[i].done;
        props.toggleTodo();
    };
    const updateTitle = (i, title) => {
        props.todos[i].title = title;
        props.updateTodo();
    };
    const deleteItem = (index) => {
        setList(list.filter((el, i) => i !== index));
    };
    const swap = (id1, id2) => {
        const copy = list.slice();
        copy[id1] = list[id2];
        copy[id2] = list[id1];
        setList(copy);
    };

    return (
        <div className="App">
            <Form addItem={addItem}/>
            <List
                todoItems={props.todos}
                toggle={toggle}
                updateTitle={updateTitle}
                deleteItem={deleteItem}
                swap={swap}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    toggleTodo: () => dispatch({type: 'TODO_TOGGLE'}),
    updateTodo: () => dispatch({type: 'TODO_UPDATE'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);