import React from 'react';
import { connect } from 'react-redux';

import { updateF } from '../actions/update';
import K from './K';
import L from './L';

class F extends React.Component {
    state = {
        count: 0,
    };

    update = e => {
        e.stopPropagation();
        let count = this.state.count;
        const data = `reducer f2 - state ${++count}`;
        this.props.updateF(data);
        this.setState({ count });
    };

    render() {
        console.log('F');
        return (
            <div className='row-3'>
                <div className='btn-f'>
                    <button onClick={this.update}>F {this.props.f}</button>
                </div>
                <K />
                <L />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    f: store.fReducer.f,
    // a: store.aReducer.a
});

const mapDispatchToProps = dispatch => ({
    updateF: data => dispatch(updateF(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(F);
