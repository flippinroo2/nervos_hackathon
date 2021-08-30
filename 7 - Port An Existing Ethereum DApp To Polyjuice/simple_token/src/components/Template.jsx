import PropTypes from 'prop-types';

const DEBUG = false;

const Template = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return <div></div>;
};

// Template.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Template.defaultProps = {
//   array: [''],
// };

export default Template;
