import PropTypes from 'prop-types';

const DEBUG = true;

const Panel = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  const { content } = props;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Title</h3>
      </div>
      <div className="panel-body">
        {content.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </div>
  );
};

// Panel.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Panel.defaultProps = {
//   array: [''],
// };

export default Panel;
