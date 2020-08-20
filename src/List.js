import React from 'react';
import './App.css';

function List(props) {
  const item = (el, i) => (
      <div key={el.title + i}>
        <input
            type='checkbox'
            className="check"
            checked={el.done}
            onChange={() => props.toggle(i)}
        />

        <input
            defaultValue={el.title}
            className={el.done ? "done inlineEdit" : "inlineEdit"}
            onBlur={(e) => props.updateTitle(i, e.target.value)}
        />

        <button onClick={() => props.deleteItem(i)}>&times;</button>
        {i !== 0  && <button onClick={() => props.swap(i, i-1)}>&#8593;</button>}
        {i !== props.todoItems.length - 1 && <button onClick={() => props.swap(i, i+1)}>&#8595;</button>}

      </div>
  );
  return (
      <div className="List">
        {props.todoItems.map(item)}
      </div>
  );
}

export default List;