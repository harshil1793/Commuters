import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          returnKeyType='next'
          onSubmitEditing={ () => this.passwordInput.focus()}
          placeholder='Email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          autoCapitalize='none'
          autoCorrect         ={false}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          returnKeyType='go'
          placeholder='Password'
          keyboardAppearance='dark'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <View style={styles.submitBtn}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text style={styles.topBarButton}>Forgot password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name='ios-arrow-dropright' size={52} color='rgb(51, 149, 255)'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 80,
    paddingRight: 20,
    paddingBottom: 20
  },
  input: {
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingLeft: 20,
    // borderBottomWidth: 1,
    // borderColor: 'rgb(90, 200, 255)',
    marginBottom: 25,
    fontSize: 16,
    color: '#333',
  },
  textStyle:{
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBarButton: {
    marginTop: -40,
    color: 'steelblue',
    fontSize: 18
  },
  submitBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
});
