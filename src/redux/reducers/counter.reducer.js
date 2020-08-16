const initState = {
    count: 0,
};

const counter = (state = initState, action) => {
    switch(action.type) {
        case 'increaseCounter':
            const { nb } = action.payload;
            const sum = state.count + nb;
            return {
                ...state,
                count: sum
            };
        default:
            return state;
    }
};

export default counter;



