import React from 'react';
import { connect } from 'react-redux';

import { updateE } from '../actions/update';

class E extends React.Component {
    update = e => {
        e.stopPropagation();
        let [str, count] = this.props.e.split(' ');
        const newStrStore = `${str} ${++count}`;

        this.props.updateE(newStrStore);
    };

    render() {
        console.log('E');

        return (
            <div>
                <button onClick={this.update}>E {this.props.e}</button>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    e: store.eReducer.e
});

const mapDispatchToProps = dispatch => ({
    updateE: data => dispatch(updateE(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(E);
