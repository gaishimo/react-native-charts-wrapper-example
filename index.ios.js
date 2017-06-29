/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import LineChartExample from './line-chart'


import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class RNChartsWrapperSample extends Component {
  render() {
    return (
      <LineChartExample />
    );
  }
}

AppRegistry.registerComponent('RNChartsWrapperSample', () => RNChartsWrapperSample);
