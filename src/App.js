import React, {useState} from 'react';
import './App.css';
import Form from "./Form";
import List from "./List";

const initialState = [
  {title: 'First', done: false},
  {title: 'Second', done: false},
  {title: 'Third', done: false}
];

function App() {
  const [list, setList] = useState(initialState);
  const addItem = (e) => {
    // e - event (submit form)
    // e.target - обращаемяс к тэгу form
    // e.target[0] - input
    // e.target[0].value - our string
    // preventDefault - чтобы страница не перегружалась при нажатии Add
    e.preventDefault();
    const record = {title: e.target[0].value, done: false};
    e.target[0].value = '';
    setList([...list, record]);
  };
  const toggle = (i) => {
    list[i].done = !list[i].done;
    setList(list.slice());
  };
  const updateTitle = (i, title) => {
    list[i].title = title;
    setList(list.slice());
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
            todoItems={list}
            toggle={toggle}
            updateTitle={updateTitle}
            deleteItem={deleteItem}
            swap={swap}
        />
      </div>
  );
}

export default App;