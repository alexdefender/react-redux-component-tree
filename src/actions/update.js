export const UPDATE_A = 'UPDATE_A';
export const UPDATE_C = 'UPDATE_C';
export const UPDATE_E = 'UPDATE_E';
export const UPDATE_F = 'UPDATE_F';

export const updateA = payload => {
    return { type: UPDATE_A, payload };
};

export const updateC = payload => {
    return { type: UPDATE_C, payload };
};

export const updateE = payload => {
    return { type: UPDATE_E, payload };
};

export const updateF = payload => {
    return { type: UPDATE_F, payload };
};
