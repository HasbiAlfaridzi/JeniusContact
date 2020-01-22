import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App.js';
import {name as appName} from './app.json';
import { Root } from 'native-base';
export default class ReduxCounter extends Component {
  render() {
    return (
      <Root>
      <App />
      </Root>
    );
  }
}
AppRegistry.registerComponent(appName, () => ReduxCounter);