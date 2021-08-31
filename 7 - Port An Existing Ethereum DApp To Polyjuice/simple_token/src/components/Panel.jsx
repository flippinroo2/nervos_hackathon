/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class Panel extends Component {
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

  componentDidMount() {
    this.getContractData();
  }

  async getContractData() {
    const { address, contract } = this.state;
    if (address == '0x10E2bb67a74C9f9e8AA8017E5B24B520dB543751') {
      const ERC20EXAMPLE = contract;

      const balance = await ERC20EXAMPLE.methods.balanceOf(address).call();
      this.setState({ balance: parseInt(balance) });

      const name = await ERC20EXAMPLE.methods.name().call();
      this.setState({ name: name });

      const symbol = await ERC20EXAMPLE.methods.symbol().call();
      this.setState({ symbol: symbol });

      const totalSupply = await ERC20EXAMPLE.methods.totalSupply().call();
      this.setState({ totalSupply: parseInt(totalSupply) });
    }

    if (address == '0x48e8cf26b9d25Ca4b103d34047dEe8bAE689eDC7') {
      const Token = contract;

      const admin = await Token.methods.getAdmin().call();
      this.setState({ admin: admin });

      const balance = await Token.methods.balanceOf(address).call();
      this.setState({ balance: parseInt(balance) });

      const name = await Token.methods._name().call();
      this.setState({ name: name });

      const symbol = await Token.methods._symbol().call();
      this.setState({ symbol: symbol });

      const totalSupply = await Token.methods.totalSupply().call();
      this.setState({ totalSupply: parseInt(totalSupply) });
    }
  }

  render() {
    const { address, admin, balance, loading, name, symbol, totalSupply } =
      this.state;
    console.log(this.state);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">{address}</h4>
        </div>
        <div className="panel-body">
          <li>{`admin: ${admin}`}</li>
          <li>{`balance: ${balance}`}</li>
          <li>{`name: ${name}`}</li>
          <li>{`symbol: ${symbol}`}</li>
          <li>{`totalSupply: ${totalSupply}`}</li>
        </div>
      </div>
    );
  }
}

// Panel.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Panel.defaultProps = {
//   array: [''],
// };

export default Panel;
