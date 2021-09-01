import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEBUG = false;

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.functionList = React.createRef();
    const stateObject = {
      buttonText: 'N/A',
      functions: {},
      functionText: [],
    };
    this.state = stateObject;
    this.selectFunction = this.selectFunction.bind(this);
    this.interactWithContract = this.interactWithContract.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { functions } = props;
    var functionText = [];
    if (functions) {
      functionText = Object.keys(functions).filter((item) => {
        if (item.startsWith('_')) {
          if (!item.endsWith(')')) {
            return null;
          }
          return item;
        }
        if (item.startsWith('0x') || item.endsWith('()')) {
          return null;
        }
        if (!item.endsWith(')')) {
          return null;
        }
        return item;
      });
    }
    return { functions, functionText };
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
    const { functions } = this.state;
    const { target } = event;
    const { innerText } = target;
    console.log(innerText);
    console.log(functions);
    const test = await functions[innerText]().call();
    console.log(test);
  }

  render() {
    const { buttonText, functions, functionText } = this.state;
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
          {functionText.length ? (
            functionText.map((item, index) => {
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
