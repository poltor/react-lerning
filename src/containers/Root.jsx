import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RandomCat from './RandomCat';


export default class Root extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <RandomCat />
      </Provider>
    )
  }

}


Root.propTypes = {
  store: PropTypes.object.isRequired,
};
