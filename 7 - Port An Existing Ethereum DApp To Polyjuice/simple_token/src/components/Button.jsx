/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class Button extends Component {
  constructor(props) {
    super(props);
    const { address, contract } = props.content;
    const stateObject = {
      address,
      admin: '',
      balance: 0,
      contract,
      loading: true,
      name: '',
      symbol: '',
      totalSupply: 0,
    };
    this.state = stateObject;
  }

  componentDidMount() {}

  async interactWithContract() {}

  render() {
    return <button onClick={this.interactWithContract()} />;
  }
}

// Button.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Button.defaultProps = {
//   array: [''],
// };

export default Button;
