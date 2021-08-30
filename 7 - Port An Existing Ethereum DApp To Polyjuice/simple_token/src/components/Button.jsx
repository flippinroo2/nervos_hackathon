import PropTypes from 'prop-types';

const DEBUG = false;

const Button = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  // Use "sm" for small, "lg" for large and don't have anything after "btn" for normal size.
  return <button type="button" class="btn btn-sm btn-default"></button>;
};

// Button.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Button.defaultProps = {
//   array: [''],
// };

export default Button;
