/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import ContractProvider from './contracts/ContractProvider.jsx';
import Contract from './contracts/Contract.jsx';

const DEBUG = true;

const Content = (props) => {
  const { contracts } = props;
  return contracts.map((item, index) => {
    const { address, contract } = item;
    return;
    <ContractProvider>
      <Contract key={index} address={address} contract={contract} />
    </ContractProvider>;
  });
};

export default Content;
