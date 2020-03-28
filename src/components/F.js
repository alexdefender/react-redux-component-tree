import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateF } from '../actions/update';
import K from './K';
import L from './L';

const F = () => {
    const [stateFinF, setStateFinF] = useState('stateFinF 1');

    const { f } = useSelector(store => store.fReducer);
    const dispatch = useDispatch();

    const update = e => {
        e.stopPropagation();
        let [strState, countState] = stateFinF.split(' ');
        let [strStore, countStore] = f.split(' ');
        const newStrState = `${strState} ${++countState} `;
        const newStrStore = `${strStore} ${++countStore} `;

        setStateFinF(newStrState);
        dispatch(updateF(newStrStore));
    };

    console.log('F');

    const str = `${f} - ${stateFinF}`;

    return (
        <div className="row-3">
            <div className="btn-f">
                <button onClick={update}>F {str}</button>
            </div>
            <K />
            <L />
        </div>
    );
};

export default F;
