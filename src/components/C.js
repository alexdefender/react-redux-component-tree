import React from 'react';
import { connect } from 'react-redux';

import { updateC } from '../actions/update';
import F from './F';

class C extends React.Component {
    update = e => {
        e.stopPropagation();
        const data = 'reducer c2';
        this.props.updateC(data);
    };

    render() {
        console.log('C');
        return (
            <div className='row-2'>
                <div>
                    <button onClick={this.update}>C {this.props.c}</button>
                </div>
                <F />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    c: store.cReducer.c,
});

const mapDispatchToProps = dispatch => ({
    updateC: data => dispatch(updateC(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(C);
