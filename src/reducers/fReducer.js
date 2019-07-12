import { UPDATE_F } from '../actions/update';

const initialState = {
    f: 'storeF 1',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_F:
            return { ...state, f: action.payload };
        default:
            return state;
    }
};
