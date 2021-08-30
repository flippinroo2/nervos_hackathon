import PropTypes from 'prop-types';

const DEBUG = false;

const NavItem = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  const { link, text } = props;

  return (
    <li role="presentation">
      <a href={link}>{text}</a>
    </li>
  );
};

// NavItem.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// NavItem.defaultProps = {
//   array: [''],
// };

export default NavItem;
