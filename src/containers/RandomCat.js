import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as catActions, picSelector, loadingSelector, errorSelector } from './../reducers/cat';



class RandomCat extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchCat();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.clearCat();
  }

  render() {
    const { pic, loading, error } = this.props;

    if (error) {
      return (
        <div>
          Error
        </div>
      );
    }

    if (loading) {
      return (
        <div>
          loading
        </div>
      );
    }

    return (
      <ul>
        <h1>Random cat pic</h1>

        <img src={pic} />
      </ul>
    );
  }

}


function mapStateToProps(state) {
  return {
    pic: picSelector(state),
    loading: loadingSelector(state),
    error: errorSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchCat: catActions.fetchCat(dispatch),
      clearCat: () => dispatch(catActions.clear()),
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RandomCat);