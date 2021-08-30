/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
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
import MetaData from './components/MetaData.jsx';
import { getActiveNetwork, getContracts } from './helpers/transactions.jsx';
import hardhatContracts from './contracts/hardhat_contracts.json'; // ABI & ADDRESS

const DEBUG = true;

const moralis = require('moralis');
// const hardhatContracts = require('./contracts/hardhat_contracts.json'); // ABI & ADDRESS

console.log(hardhatContracts);

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      loading: true,
    };

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    console.clear();

    // Connect to Moralis server
    // moralis.initialize("paste Moralis APP ID here");
    // moralis.serverURL = "paste Morlis server URL here";

    console.log('moralis');
    console.log(moralis);

    const Web3Provider = Web3.givenProvider;
    // console.dir(Web3Provider); // Returns a MetaMask provider.

    const MoralisWeb3Enable = await moralis.Web3.enable();
    console.log(MoralisWeb3Enable);

    const metaMaskWeb3 = new Web3(MoralisWeb3Enable || 'http://localhost:8545');
    const web3 = new Web3('http://localhost:7545');

    const accounts = await web3.eth.getAccounts();
    console.log(`accounts: ${accounts}`);

    const MoralisWeb3Provider = await moralis.Web3.getWeb3Provider(); // Provider does not have a request or send method to use.
    console.log(MoralisWeb3Provider);

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

    const contractMetadata = await getContracts(web3.eth, hardhatContracts);
    // const contracts = await getContracts(web3.eth);
    console.log(contractMetadata);

    this.setState({ account: accounts[0] });
    this.setState({ loading: false });
  }

  toggleCompleted() {
    this.setState({ loading: true });
  }

  render() {
    const { account, loading } = this.state;

    const styles = [bootstrapStyle, webixStyle, ...devExtremeStyles];
    const scripts = [bootstrapScript, webixScript, ...devExtremeScripts];

    return (
      <div className="wrapper">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/free-download"
            target="_blank"
            rel="noreferrer">
            Dapp University | Todo List
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small>
                <a className="nav-link" href="#">
                  <span id="account" />
                </a>
              </small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main
              role="main"
              className="col-lg-12 d-flex justify-content-center">
              {loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <div>{account}</div>
              )}
            </main>
          </div>
        </div>
        {/* <MetaData styles={styles} scripts={scripts} /> */}
      </div>
    );
  }
}

export default App;
