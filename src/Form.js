import React from 'react';

function Form(props) {
  return (
      <div className="Form">
        <form onSubmit={props.addItem}>
          <input/>
          <button type='Submit'>Add</button>
        </form>
      </div>
  );
}

export default Form;