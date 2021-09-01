/* eslint-disable no-unused-vars, react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import debug from './helpers/debug.jsx';

import './styles/App.css';

import Navigation from './components/navigation/Navigation.jsx';
import ContractProvider from './components/contracts/ContractProvider.jsx';
import Content from './components/Content.jsx';
import MetaData from './components/MetaData.jsx';

const DEBUG = true;

class App extends Component {
  constructor(props) {
    super(props);
    const stateObject = {
      contracts: [],
      loading: true,
    };
    this.state = stateObject;
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  toggleCompleted() {
    this.setState({ loading: true });
  }

  render() {
    const { contracts } = this.state;

    return (
      <>
        <Navigation />
        <main role="main">
          <div className="container-fluid">
            <Content />
          </div>
        </main>
        <MetaData />
      </>
    );
  }
}

export default App;
