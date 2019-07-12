import React from 'react';
import D from './D';

const B = () => {
    console.log('B');

    return (
        <div className="row-2">
            <div>
                <button>B</button>
            </div>
            <D />
        </div>
    );
};

export default B;
