import { UPDATE_A } from '../actions/update';

const initialState = {
    a: 'storeA 1',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_A:
            return { ...state, a: action.payload };
        default:
            return state;
    }
};
