const initialState = {
    todos: [
        {
            title: 'First todo',
            done: false,
        }, {
            title: 'Second todo',
            done: false,
        }, {
            title: 'Third todo',
            done: false,
        }, {
            title: 'Forth todo',
            done: false,
        }, {
            title: 'Fifth todo',
            done: false,
        }
    ]
};

const reducer = (state = initialState, action) => {
        switch (action.type) {

            case 'TODO_ADD':
                return {
                    ...state,
                    todos: [...state.todos, {title: action.payload, done: false}]
                };

            case 'TODO_TOGGLE':
                return {
                    ...state,
                    todos: state.todos.map((el, i) => {
                        if (i === action.payload) {
                            el.done = !el.done
                        }
                        return el;
                    })
                };
            case 'TODO_UPDATE':
                return {
                    ...state,
                    todos: state.todos.map((el, i) => {
                        if (i === action.payload.index) {
                            el.title = action.payload.title
                        }
                        return el;
                    })
                };

            case 'TODO_DELETE':
                return {
                    ...state,
                    todos: state.todos.filter((el, i) => i !== action.payload)
                };

            case 'TODO_SWAP':
                return {
                    ...state,
                    todos: state.todos.map((el, i) => {
                        if (i === action.payload.index1) {
                            return state.todos[action.payload.index2]
                        }
                        if (i === action.payload.index2) {
                            return state.todos[action.payload.index1]
                        }
                        return el;
                    })
                };

            default:
                return state;
        }
    }
;

export default reducer;
