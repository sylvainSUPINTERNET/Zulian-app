'use strict';

// nom reducer = nom de la state
const incrementReducer = (state = 1, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state
    }
};

export default incrementReducer
