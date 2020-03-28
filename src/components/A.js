import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateA } from '../actions/update';
import B from './B';
import C from './C';

export const contextD = React.createContext({});

const A = () => {
    const [stateDinA, setStateDinA] = useState('stateDinA 1');
    const [contextDinA, setContextDinA] = useState('contextDinA 1');

    const { a } = useSelector(store => store.aReducer);
    const dispatch = useDispatch();

    const update = e => {
        e.stopPropagation();
        let [str, count] = a.split(' ');
        const newStrStore = `${str} ${++count}`;

        dispatch(updateA(newStrStore));
    };

    const updateStateDinA = e => {
        e.stopPropagation();
        // let [str, count] = stateDinA.split(' ');
        let [str, count] = contextDinA.split(' ');

        const newStrState = `${str} ${++count}`;

        // setStateDinA(newStrState);
        setContextDinA(newStrState);
    };

    console.log('A');

    const context = {
        contextDinA,
        updateStateDinA
    };

    return (
        <contextD.Provider value={context}>
            <div className="row-1">
                <div className="btn-a">
                    <button onClick={update}>A {a}</button>
                </div>
                <B />
                <C />
            </div>
        </contextD.Provider>
    );
};

export default A;
