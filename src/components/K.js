import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

class K extends Component {
    state = {
        stateKinK: 'stateKinK 1'
    };

    update = e => {
        e.stopPropagation();
        let [strState, countState] = this.state.stateKinK.split(' ');
        const newStrState = `${strState} ${++countState} `;

        this.setState({ stateKinK: newStrState });
    };

    render() {
        console.log('K');

        return (
            <div>
                <button onClick={this.update}>K {this.state.stateKinK}</button>
            </div>
        );
    }
}

// const mapStateToProps = store => ({
//     a: store.aReducer.a
// })

// export default connect(mapStateToProps)(K);

// const K = () => {
//     const [count, setCount] = useState('state 1');
//     const { c } = useSelector(store => store.cReducer);
//     console.log({ c });

//     const update = e => {
//         e.stopPropagation();
//         let [strState, countState] = count.split(' ');
//         const newStrState = `${strState} ${++countState} `;

//         setCount(newStrState);
//     };

//     console.log('K');

//     return (
//         <div>
//             <button onClick={update}>K {count}</button>
//         </div>
//     );
// };

export default K;

