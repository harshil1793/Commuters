import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          EMAIL ADDRESS
        </Text>
        <TextInput
          returnKeyType='next'
          onSubmitEditing={ () => this.passwordInput.focus()}
          keyboardType='email-address'
          keyboardAppearance='dark'
          autoCapitalize='none'
          autoCorrect         ={false}
          style={styles.input}
        />
        <Text style={styles.textStyle}>
          PASSWORD
        </Text>
        <TextInput
          secureTextEntry
          returnKeyType='go'
          keyboardAppearance='dark'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <View style={styles.submitBtn}>
          <TouchableOpacity>
            <Text>
              <Ionicons name='ios-arrow-dropright' size={52} color='rgb(51, 149, 255)'/>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: 'rgb(90, 200, 255)',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  textStyle:{
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitBtn: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});
