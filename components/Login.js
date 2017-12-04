import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import LoginForm from './LoginForm.js'

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text>
              <Entypo name='chevron-small-left' size={40} color='rgb(51, 149, 255)'/>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text style={styles.topBarButton}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.title}>Log in</Text>
          <LoginForm/>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // ecf0f1
    backgroundColor: '#ffffff'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    paddingLeft:10,
    paddingRight:20,
    marginTop:30
  },
  topBarButton: {
    marginTop:10,
    color: '#333',
    fontSize: 18
  },
  title: {
    color: '#333',
    fontSize: 32,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 30,
    fontFamily: 'AppleSDGothicNeo-Light'
  }
});
