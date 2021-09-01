/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../general/Panel.jsx';
import ProgressBar from '../general/ProgressBar.jsx';

const DEBUG = false;

class Contract extends Component {
  constructor(props) {
    super(props);
    const stateObject = {
      address: '',
      contract: {},
      loading: true,
    };
    this.state = stateObject;
  }
  static getDerivedStateFromProps(props, state) {
    const { address, contract } = props;
    return { address, contract };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { address, contract, loading } = this.state;
    return (
      <div className="row">
        {loading ? (
          <ProgressBar percentage={70} minimum={0} maximum={100} />
        ) : (
          <ContractProvider.Provider value={contracts}>
            <Panel
              content={{
                address,
                contract,
              }}
            />
          </ContractProvider.Provider>
        )}
      </div>
    );
  }
}

Contract.propTypes = {
  address: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

Contract.defaultProps = {
  address: '',
  loading: true,
};

export default Contract;
