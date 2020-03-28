import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateC } from '../actions/update';
import F from './F';

const C = () => {
    const [stateCinC, setStateCinC] = useState('stateCinC 1');

    const { c } = useSelector(store => store.cReducer);
    const dispatch = useDispatch();

    const update = e => {
        e.stopPropagation();
        let [strState, countState] = stateCinC.split(' ');
        let [str, count] = c.split(' ');
        const newStrState = `${strState} ${++countState} `;
        const newStrStore = `${str} ${++count}`;

        setStateCinC(newStrState);
        // dispatch(updateC(newStrStore));
    };

    console.log('C');

    const str = `${c} - ${stateCinC}`;

    return (
        <div className="row-2">
            <div>
                <button onClick={update}>C {str}</button>
            </div>
            <F />
        </div>
    );
};

export default C;
