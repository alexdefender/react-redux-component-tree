import { UPDATE_E } from '../actions/update';

const initialState = {
    e: 'reducer e1',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_E:
            return { ...state, e: action.payload };
        default:
            return state;
    }
};
