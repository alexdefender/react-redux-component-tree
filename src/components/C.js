import React from 'react';
import { connect } from 'react-redux';

import { updateC } from '../actions/update';
import F from './F';

class C extends React.Component {
    state = {
        stateCinC: 'stateCinC 1'
    };

    update = e => {
        e.stopPropagation();
        let [strState, countState] = this.state.stateCinC.split(' ');
        let [str, count] = this.props.c.split(' ');
        const newStrState = `${strState} ${++countState} `;
        const newStrStore = `${str} ${++count}`;

        this.setState({ stateCinC: newStrState });
        this.props.updateC(newStrStore);
    };

    render() {
        console.log('C');

        const str = `${this.props.c} - ${this.state.stateCinC}`;

        return (
            <div className="row-2">
                <div>
                    <button onClick={this.update}>C {str}</button>
                </div>
                <F />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    c: store.cReducer.c
});

const mapDispatchToProps = dispatch => ({
    updateC: data => dispatch(updateC(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(C);
