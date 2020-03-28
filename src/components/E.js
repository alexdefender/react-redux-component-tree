import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateE } from '../actions/update';

const E = () => {
    const { e } = useSelector(store => store.eReducer);
    const dispatch = useDispatch();

    const update = event => {
        event.stopPropagation();
        let [str, count] = e.split(' ');
        const newStrStore = `${str} ${++count}`;

        dispatch(updateE(newStrStore));
    };

    console.log('E');

    return (
        <div>
            <button onClick={update}>E {e}</button>
        </div>
    );
};

export default E;
