import PropTypes from 'prop-types';

const DEBUG = false;

const Toast = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  const { functionName, returnValue } = props;

  return (
    <div class="bd-example bg-dark p-5 align-items-center">
      <div
        class="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div class="toast-header">
          <svg
            class="bd-placeholder-img rounded me-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false">
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>

          <strong class="me-auto">{functionName}</strong>
          <small class="text-muted">11 mins ago</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"></button>
        </div>
        <div class="toast-body">{returnValue}</div>
      </div>
    </div>
  );
};

// Toast.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Toast.defaultProps = {
//   array: [''],
// };

export default Toast;
