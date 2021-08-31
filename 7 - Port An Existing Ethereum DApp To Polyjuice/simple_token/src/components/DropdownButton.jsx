import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.functionList = React.createRef();
    const stateObject = {
      buttonText: 'N/A',
      items: [],
    };
    this.state = stateObject;
    this.selectFunction = this.selectFunction.bind(this);
    this.interactWithContract = this.interactWithContract.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { items } = props;
    const functions = items.filter((item) => {
      if (!item.endsWith(')')) {
        return null;
      }
      return item;
    });
    return { items: functions };
  }

  componentDidMount() {
    // console.log(this.functionList.current.children);
  }

  selectFunction(event) {
    const { target, type } = event;
    const {
      attributes,
      children,
      classList,
      className,
      innerHTML,
      innerText,
      style,
      value,
    } = target;
    this.setState({ buttonText: innerText });
  }

  async interactWithContract(event) {
    const { target } = event;
    const { innerText } = target;
    console.log(innerText);
  }

  render() {
    const { items, buttonText } = this.state;
    // Try combining both the hidden & unhidden buttons.
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => await this.interactWithContract(event)}>
          {buttonText}
        </button>
        <button
          type="button"
          className="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul
          className="dropdown-menu"
          data-popper-placement="bottom-start"
          ref={this.functionList}>
          {items.length ? (
            items.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={this.selectFunction}>
                    {item}
                  </a>
                </li>
              );
            })
          ) : (
            <li
              className="dropdown-item"
              href="#"
              onClick={this.selectFunction}>
              N/A
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// DropdownButton.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// DropdownButton.defaultProps = {
//   array: [''],
// };

export default DropdownButton;
