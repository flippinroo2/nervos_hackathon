/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import debug from './helpers/debug.jsx';

import './styles/App.css';

import Navigation from './components/navigation/Navigation.jsx';
import Content from './components/Content.jsx';
import MetaData from './components/MetaData.jsx';

const DEBUG = true;

class App extends Component {
  constructor(props) {
    super(props);
    const stateObject = {
      contracts: [],
      loading: true,
    };
    this.state = stateObject;
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    // console.clear();

    // Connect to Moralis server
    // moralis.initialize("paste Moralis APP ID here");
    // moralis.serverURL = "paste Morlis server URL here";

    debug('moralis');
    debug(moralis);

    const Web3Provider = Web3.givenProvider;
    // console.dir(Web3Provider); // Returns a MetaMask provider.

    const MoralisWeb3Enable = await moralis.Web3.enable();
    debug(MoralisWeb3Enable);

    const metaMaskWeb3 = new Web3(MoralisWeb3Enable || 'http://localhost:8545');
    const web3 = new Web3('http://localhost:7545');

    const accounts = await web3.eth.getAccounts();
    debug(`accounts: ${accounts}`);

    const MoralisWeb3Provider = await moralis.Web3.getWeb3Provider(); // Provider does not have a request or send method to use.
    // console.log(MoralisWeb3Provider);

    var ERC20EXAMPLE, Token;
    var admin, address, allowance, balance, _name;
    const contractArray = await getContracts(web3.eth, hardhatContracts);
    this.setState({ contracts: contractArray });
    // contractArray.forEach(async (item) => {
    //   const { address, name, symbol } = item;
    //   if (symbol) {
    //     if (address == '0x10E2bb67a74C9f9e8AA8017E5B24B520dB543751') {
    //       ERC20EXAMPLE = item.contract;
    //     }
    //     if (address == '0x48e8cf26b9d25Ca4b103d34047dEe8bAE689eDC7') {
    //       Token = item.contract;
    //       admin = await Token.methods.getAdmin().call();
    //       _name = await Token.methods._name().call();
    //       balance = await Token.methods.balanceOf(accounts[0]).call();
    //       allowance = await Token.methods
    //         .allowance(address, accounts[0])
    //         .call();
    //       this.setState({ name: _name });
    //       this.setState({ allowance: allowance });
    //       this.setState({ address: address });
    //       this.setState({ admin: admin });
    //       this.setState({ balance: balance });
    //     }
    //   }
    // });

    // this.setState({ account: accounts[0] });
    // this.setState({ loading: false });
    debug(contractArray);
  }

  toggleCompleted() {
    this.setState({ loading: true });
  }

  render() {
    const { contracts } = this.state;

    // const styles = [bootstrapStyle, webixStyle, ...devExtremeStyles];
    // const scripts = [bootstrapScript, webixScript, ...devExtremeScripts];

    const styles = bootstrap.styles;
    const scripts = bootstrap.scripts;

    return (
      <>
        <Navigation menu={menu} />
        <main role="main">
          <div className="container-fluid">
            <Content contracts={contracts} />
          </div>
        </main>
        <MetaData styles={styles} scripts={scripts} />
      </>
    );
  }
}

export default App;
