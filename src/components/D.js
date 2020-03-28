import React, { useContext } from 'react';
import E from './E';
import J from './J';

import { contextD } from './A';

const D = () => {
    const { contextDinA, updateStateDinA } = useContext(contextD);

    console.log('D');

    return (
        <div className="row-3">
            <div className="btn-d">
                <button onClick={updateStateDinA}>D {contextDinA}</button>
            </div>
            <E />
            <J />
        </div>
    );
};

export default D;
