/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import debug from './helpers/debug.jsx';
import Contract from './components/Contract.jsx';

const DEBUG = true;

class Content extends Component {
  constructor(props) {
    super(props);
    const { address, admin, allowances, balances, loading } = props;
    const stateObject = {
      address: '',
      admin: '',
      allowances: {},
      balances: {},
      loading: true,
    };
    this.state = stateObject;
  }

  componentDidMount() {}

  render() {
    // const { account, allowance, address, admin, balance, loading, name } =
    //   this.state;
    const { allowance, address, admin, balance, loading, name } = this.state;

    return <Contract />;
  }
}

export default Content;
