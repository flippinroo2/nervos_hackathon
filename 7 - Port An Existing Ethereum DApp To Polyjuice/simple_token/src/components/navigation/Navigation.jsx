import PropTypes from 'prop-types';
import menu from './/menu.js';
import NavItem from './NavItem.jsx';

const DEBUG = false;

const Navigation = (props) => {
  if (DEBUG) {
    console.log('props');
    console.log(props);
  }

  return (
    <nav className="navbar navbar-dark navbar-fixed-top bg-dark shadow">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" target="_blank" rel="noreferrer">
            DApp
          </a>
        </div>
        <ul className="nav navbar-nav" role="tablist">
          {menu.map((item, index) => {
            const { text, link } = item;
            return (
              <NavItem key={`nav-item-${index}`} text={text} link={link} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

// Navigation.propTypes = {
//   menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
//   menuLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// Navigation.defaultProps = {
//   menuItems: ['Home'],
//   menuLinks: ['#'],
// };

export default Navigation;
