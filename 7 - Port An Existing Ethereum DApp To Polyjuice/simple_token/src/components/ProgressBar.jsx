import PropTypes from 'prop-types';

const DEBUG = false;

const ProgressBar = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100">
        {/* <span class="sr-only">60% Progress</span> */}
        <span>60% Progress</span>
      </div>
    </div>
  );
};

// ProgressBar.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// ProgressBar.defaultProps = {
//   array: [''],
// };

export default ProgressBar;
