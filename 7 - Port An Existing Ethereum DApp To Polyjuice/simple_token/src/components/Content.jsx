/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { useState, useEffect, useContext } from 'react';
import ContractProvider from './contracts/ContractProvider.jsx';
import Contract from './contracts/Contract.jsx';

const DEBUG = true;

const Content = (props) => {
  const [contracts, setContracts] = useState([]);
  const context = useContext(ContractProvider);
  const test = context.then((value) => {
    return value;
  });
  console.log(test);

  useEffect(() => {
    if (!contracts) {
      contracts = setContracts(context);
      // console.log(contracts);
    }
    return contracts;
  }, []);

  return contracts.map((item, index) => {
    // console.log(item);
    const { address, contract } = item;
    return <Contract key={index} address={address} contract={contract} />;
  });
};

export default Content;
