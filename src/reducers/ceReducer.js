import { UPDATE_C } from '../actions/update';
import { UPDATE_E } from '../actions/update';

const initialState = {
    c: 'storeC 1',
    e: 'storeE 1'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_C:
            return { ...state, c: action.payload };
        case UPDATE_E:
            return { ...state, e: action.payload };
        default:
            return state;
    }
};
