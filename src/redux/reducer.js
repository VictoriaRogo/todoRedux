const initialState = {
    todos: [
        {
            title: 'First todo',
            done: true,
        }, {
            title: 'Second todo',
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
                todos: [...state.todos]
            };

        case 'TODO_UPDATE':
            return {
                ...state,
                todos: [...state.todos]
            };

        default:
            return state;
    }
};

export default reducer;
