import {ADD_TODO, REMOVE_TODO} from "../actions/";

let todoCounter = 0;

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO: {
            todoCounter++;

            return [...state, {
                id: todoCounter,
                text: action.text
            }];
        }
        case REMOVE_TODO: {
            return state.filter(elem => elem.id !== action.id);
        }
        default:
            return state;
    }
}