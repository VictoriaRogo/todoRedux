import React from 'react';

function Form(props) {
    const submit = (e) => {
        e.preventDefault();
        props.addItem(e.target[0].value);
        e.target[0].value = '';
    };
    return (
        <div className="Form">
            <form onSubmit={submit}>
                <input/>
                <button type='Submit'>Add</button>
            </form>
        </div>
    );
}

export default Form;