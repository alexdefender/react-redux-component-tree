import React from 'react';
import { connect } from 'react-redux';

import { updateA } from '../actions/update';
import B from './B';
import C from './C';

class A extends React.Component {
    update = e => {
        e.stopPropagation();
        const data = 'reducer a2';
        this.props.updateA(data);
    };

    render() {
        console.log('A');
        return (
            <div className='row-1'>
                <div className='btn-a'>
                    <button onClick={this.update}>A {this.props.a}</button>
                </div>
                <B />
                <C />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    a: store.aReducer.a,
});

const mapDispatchToProps = dispatch => ({
    updateA: data => dispatch(updateA(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(A);
