/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component, createContext } from 'react';
import debug from '../../helpers/debug.jsx';
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
import { getActiveNetwork, getContracts } from '../../helpers/transactions.jsx';
import hardhatContracts from '../../contracts/hardhat_contracts.json'; // ABI & ADDRESS

const moralis = require('moralis');
// const hardhatContracts = require('./contracts/hardhat_contracts.json'); // ABI & ADDRESS

debug('hardhatContracts');
debug(hardhatContracts);

const ContractContext = createContext();

export default UserContext;
