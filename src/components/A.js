import React from 'react';
import { connect } from 'react-redux';

import { updateA } from '../actions/update';
import B from './B';
import C from './C';

export const contextD = React.createContext({});

class A extends React.Component {
    state = {
        stateDinA: 'stateDinA 1',
        stateContextDinA: 'stateContextDinA 1'
    };

    update = e => {
        e.stopPropagation();
        let [str, count] = this.props.a.split(' ');
        const newStrStore = `${str} ${++count}`;

        this.props.updateA(newStrStore);
    };

    updateStateDinA = e => {
        e.stopPropagation();
        // let [str, count] = this.state.stateDinA.split(' ');
        let [str, count] = this.state.stateContextDinA.split(' ');

        const newStrState = `${str} ${++count}`;

        // this.setState({ stateDinA: newStrState });
        this.setState({ stateContextDinA: newStrState });
    };

    render() {
        console.log('A');

        const context = {
            stateContextDinA: this.state.stateContextDinA,
            updateStateDinA: this.updateStateDinA
        }

        return (
            <contextD.Provider value={context}>
                <div className="row-1">
                    <div className="btn-a">
                        <button onClick={this.update}>A {this.props.a}</button>
                    </div>
                    <B
                        // stateDinA={this.state.stateDinA}
                        // updateStateDinA={this.updateStateDinA}
                    />
                    <C />
                </div>
            </contextD.Provider>
        );
    }
}

const mapStateToProps = store => ({
    a: store.aReducer.a
});

const mapDispatchToProps = dispatch => ({
    updateA: data => dispatch(updateA(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(A);
