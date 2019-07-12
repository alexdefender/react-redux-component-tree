import React from 'react';
import { connect } from 'react-redux';

import { updateF } from '../actions/update';
import K from './K';
import L from './L';

class F extends React.Component {
    state = {
        stateFinF: 'stateFinF 1'
    };

    update = e => {
        e.stopPropagation();
        let [strState, countState] = this.state.stateFinF.split(' ');
        let [strStore, countStore] = this.props.f.split(' ');
        const newStrState = `${strState} ${++countState} `;
        const newStrStore = `${strStore} ${++countStore} `;

        this.setState({ stateFinF: newStrState });
        this.props.updateF(newStrStore);
    };

    render() {
        console.log('F');

        const str = `${this.props.f} - ${this.state.stateFinF}`;

        return (
            <div className="row-3">
                <div className="btn-f">
                    <button onClick={this.update}>F {str}</button>
                </div>
                <K />
                <L />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    f: store.fReducer.f
    // a: store.aReducer.a
});

const mapDispatchToProps = dispatch => ({
    updateF: data => dispatch(updateF(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(F);
