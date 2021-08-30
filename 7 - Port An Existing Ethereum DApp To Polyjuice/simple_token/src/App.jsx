/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import debug from './helpers/debug.jsx';
import Web3 from 'web3';
import {
  // CLP,
  // Cloud,
  // Config,
  // CoreManager,
  // Dot,
  // FacebookUtils,
  // File,
  // LiveQuery,
  Moralis,
  // Plugins,
  // Polygon,
  // Role,
  // Session,
  // Storage,
  // UI,
  // User,
  // Web3API,
  // authenticate,
  // initialize,
  // secret,
  // serverURL,
} from 'moralis';
import './App.css';
import { getActiveNetwork, getContracts } from './helpers/transactions.jsx';
import hardhatContracts from './contracts/hardhat_contracts.json'; // ABI & ADDRESS
import MetaData from './components/MetaData.jsx';
import Navigation from './components/Navigation.jsx';
import Panel from './components/Panel.jsx';
import Label from './components/Label.jsx';
import Buton from './components/Button.jsx';

const DEBUG = true;

const moralis = require('moralis');
// const hardhatContracts = require('./contracts/hardhat_contracts.json'); // ABI & ADDRESS

debug('hardhatContracts');
debug(hardhatContracts);

// https://ant.design/components/grid/

// https://getbootstrap.com/docs/5.1/getting-started/introduction/
const bootstrapStyle =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css';
const bootstrapScript =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js';

// https://js.devexpress.com/Documentation/Guide/Common/Distribution_Channels/CDN/
const devExtremeScripts = [
  'https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/js/dx.all.js',
  'https://cdnjs.cloudflare.com/ajax/libs/devexpress-diagram/2.1.25/dx-diagram.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/devexpress-gantt/3.0.4/dx-gantt.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/devextreme-quill/1.3.0/dx-quill.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/devextreme-aspnet-data/2.8.6/dx.aspnet.data.min.js',
];
const devExtremeStyles = [
  'https://cdnjs.cloudflare.com/ajax/libs/devexpress-diagram/2.1.25/dx-diagram.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/devexpress-gantt/3.0.4/dx-gantt.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.1.5/css/dx.carmine.compact.css',
];

// https://docs.webix.com/desktop__basic_tasks.html
const webixStyle = 'https://cdn.webix.com/edge/webix.css';
const webixScript = 'https://cdn.webix.com/edge/webix.js';

const menu = [
  {
    text: 'Home',
    link: 'index.html',
  },
  {
    text: 'Account',
    link: 'account.html',
  },
  {
    text: 'Contracts',
    link: 'contracts.html',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      address: '',
      admin: '',
      allowance: 0,
      balance: 0,
      loading: true,
    };

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

    const MoralisConfig = moralis.Config;
    // console.log(MoralisConfig);

    // const MoralisConfigCurrent = moralis.Config.current(); // Need to call Parse.initialize() before using Parse.
    // console.log(MoralisConfigCurrent);

    // const MoralisConfigGet = moralis.Config.get(); // Need to call Parse.initialize() before using Parse.
    // console.log(MoralisConfigGet);

    // const MoralisSession = moralis.Session.current(); // Need to call Parse.initialize() before using Parse.
    // console.log(MoralisSession);

    const MoralisStorage = moralis.Storage;
    // console.log(MoralisStorage);

    const MoralisUser = moralis.User;
    // const MoralisUser = moralis.User.current(); // Need to call Parse.initialize() before using Parse.
    // const MoralisUser = moralis.User.currentAsync(); // Need to call Parse.initialize() before using Parse.
    // console.log(MoralisUser);

    var ERC20EXAMPLE, Token;
    var admin, address, allowance, balance, _name;
    const contractArray = await getContracts(web3.eth, hardhatContracts);
    contractArray.forEach(async (item) => {
      const { address, name, symbol } = item;
      if (symbol) {
        if (address == '0x10E2bb67a74C9f9e8AA8017E5B24B520dB543751') {
          ERC20EXAMPLE = item.contract;
        }
        if (address == '0x48e8cf26b9d25Ca4b103d34047dEe8bAE689eDC7') {
          Token = item.contract;
          admin = await Token.methods.getAdmin().call();
          _name = await Token.methods._name().call();
          balance = await Token.methods.balanceOf(accounts[0]).call();
          allowance = await Token.methods
            .allowance(address, accounts[0])
            .call();
          this.setState({ name: _name });
          this.setState({ allowance: allowance });
          this.setState({ address: address });
          this.setState({ admin: admin });
          this.setState({ balance: balance });
        }
      }
    });

    this.setState({ account: accounts[0] });
    this.setState({ loading: false });
    console.log(contractArray);
  }

  toggleCompleted() {
    this.setState({ loading: true });
  }

  render() {
    const { account, allowance, address, admin, balance, loading, name } =
      this.state;

    // const styles = [bootstrapStyle, webixStyle, ...devExtremeStyles];
    // const scripts = [bootstrapScript, webixScript, ...devExtremeScripts];

    const styles = [bootstrapStyle];
    const scripts = [bootstrapScript];

    return (
      <>
        <Navigation menu={menu} />
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="d-flex">
              {loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Panel
                  content={[account, address, admin, allowance, balance, name]}
                />
              )}
            </main>
          </div>
        </div>
        <MetaData styles={styles} scripts={scripts} />
      </>
    );
  }
}

export default App;
