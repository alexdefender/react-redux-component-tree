import React from 'react';
import E from './E';
import J from './J';

import { contextD } from './A';

const D = () => {
    console.log('D');
           
    return (
        <contextD.Consumer>
            {({stateContextDinA, updateStateDinA}) => (
                <div className="row-3">
                    <div className="btn-d">
                        <button onClick={updateStateDinA}>
                            D {`${stateContextDinA}`}
                        </button>
                    </div>
                    <E />
                    <J />
                </div>
            )}
        </contextD.Consumer>
    );
};

export default D;
