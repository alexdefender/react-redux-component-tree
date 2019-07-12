import { UPDATE_C } from '../actions/update';

const initialState = {
    c: 'reducer c1',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_C:
            return { ...state, c: action.payload };
        default:
            return state;
    }
};
