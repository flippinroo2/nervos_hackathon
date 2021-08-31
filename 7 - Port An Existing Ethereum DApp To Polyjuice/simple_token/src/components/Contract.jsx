/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel.jsx';
import ProgressBar from './ProgressBar.jsx';

const DEBUG = false;

class Contract extends Component {
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
    this.componentLoaded = this.componentLoaded.bind(this);
  }

  componentDidMount() {
    this.componentLoaded();
  }

  /*
  Function that is tied to state. See the "bind(this)" call in constructor above.
  */
  componentLoaded() {
    // this.setState({ loading: false });
  }

  render() {
    const { address, admin, allowances, balances, loading } = this.state;
    return (
      <>
        {loading ? (
          <ProgressBar percentage={60} minimum={0} maximum={100} />
        ) : (
          <div className="row">
            <Panel
              content={{
                address,
                admin,
                allowances,
                balances,
              }}
            />
          </div>
        )}
      </>
    );
  }
}

Contract.propTypes = {
  address: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

Contract.defaultProps = {
  loading: true,
};

export default Contract;
