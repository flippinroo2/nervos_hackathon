import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert.jsx';

const DEBUG = false;

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.functionList = React.createRef();
    const stateObject = {
      buttonText: 'N/A',
      functionArguments: '',
      functionText: [],
      functions: {},
    };
    this.state = stateObject;
    this.selectFunction = this.selectFunction.bind(this);
    this.interactWithContract = this.interactWithContract.bind(this);
    this.returnFunctionResult = this.returnFunctionResult.bind(this);
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

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  selectFunction(event) {
    const { target, nativeEvent, type } = event;
    // console.log(event);
    // const { path } = nativeEvent;
    // console.log(nativeEvent);
    const {
      attributes,
      children,
      classList,
      className,
      innerHTML,
      innerText,
      parentElement,
      style,
      value,
      view,
    } = target;
    this.setState({ buttonText: innerText });
  }

  async interactWithContract(event) {
    const { functions } = this.state;
    console.log(functions);
    const { path, target } = event;
    const { innerText } = target;
    const [inputGroup] = path.filter((item) => {
      const { classList } = item;
      if (classList && classList.contains('input-group')) {
        return item;
      }
    });
    let { value } = inputGroup.firstChild;
    if (innerText == 'N/A') {
      return null;
    }
    let functionResult;
    if (!value) {
      functionResult = await functions[innerText]().call();
    } else {
      functionResult = await functions[innerText](value).call();
    }
    console.log(functionResult);
    const test = await functions[innerText](value);
    console.log(test);
    returnFunctionResult(functionResult);
  }

  returnFunctionResult(result) {
    this.props.returnFunctionResult(result);
  }

  render() {
    const { buttonText, functions, functionText } = this.state;
    // Try combining both the hidden & unhidden buttons.
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => {
            try {
              await this.interactWithContract(event);
            } catch (e) {
              console.log(e);
              return <Alert errorText={e} />;
            }
          }}>
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
