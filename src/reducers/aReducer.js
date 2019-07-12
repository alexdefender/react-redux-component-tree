import { UPDATE_A } from '../actions/update';

const initialState = {
    a: 'reducer a1',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_A:
            return { ...state, a: action.payload };
        default:
            return state;
    }
};
