import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const K = () => {
    const [stateKinK, setStateKinK] = useState('stateKinK 1');
    // const { c } = useSelector(store => store.cReducer);

    const update = e => {
        e.stopPropagation();
        let [strState, countState] = stateKinK.split(' ');
        const newStrState = `${strState} ${++countState} `;

        setStateKinK(newStrState);
    };

    console.log('K');

    return (
        <div>
            <button onClick={update}>K {stateKinK}</button>
        </div>
    );
};

export default K;
