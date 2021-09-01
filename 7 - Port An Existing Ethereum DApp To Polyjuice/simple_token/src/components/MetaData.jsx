import PropTypes from 'prop-types';
import { ant, bootstrap, devExtreme, webix } from '../styles/libraries.js';
import useStyle from '../hooks/useStyle.jsx';
import useScript from '../hooks/useScript.jsx';

const DEBUG = false;

const MetaData = ({ styles, scripts }) => {
  if (DEBUG) {
    console.log('styles');
    console.log(styles);
    console.log('scripts');
    console.log(scripts);
  }

  styles.forEach((url) => {
    useStyle(url);
  });

  scripts.forEach((url) => {
    useScript(url);
  });

  return null;
};

MetaData.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// MetaData.defaultProps = {
//   styles: [''],
//   scripts: ['']
// };

export default MetaData;
