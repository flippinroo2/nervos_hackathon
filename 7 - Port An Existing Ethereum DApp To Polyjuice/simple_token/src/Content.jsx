/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import Contract from './components/Contract.jsx';

const DEBUG = true;

const Content = (props) => {
  const { contracts } = props;
  return contracts.map((item, index) => {
    const { address, contract } = item;
    return <Contract key={index} address={address} contract={contract} />;
  });
};

export default Content;
