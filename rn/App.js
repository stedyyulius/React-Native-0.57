import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import style from './style'

import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';

const Gojek = createStackNavigator({
  Login,
  Home,
})


export default class App extends Component {
  render() {
    return (
      <Gojek />
    );
  }
}

const styles = StyleSheet.create(style);
