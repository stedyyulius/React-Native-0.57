import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import loginStyle from './style';


class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  login() {
    alert('hi')
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <View style={style.upper}>
          <View style={style.logoContainer}>
            <Image
            style={style.logo}
            source={{uri:'http://static1.squarespace.com/static/58b7c8588419c2a168ec2b1c/t/58cf4c251e5b6cbf4501d647/1504671431462/bc47cbd86ef128757d0baf3f54c1fa50.jpg?format=500w' }}
            />
          </View>
          <Text style={style.instruction}>Silahkan Login dengan akun anda untuk melanjutkan</Text>
        </View>
        <TouchableOpacity
        style={style.loginButton}
        onPress={() => this.login()}>
        <Text style={style.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create(loginStyle);

export default Login;
