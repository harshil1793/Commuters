import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import AlertFeeds from './AlertFeeds.js'

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.heading}>
            <Text style={styles.title}>
              Settings
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.listOfSettings}>
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.addAlerts}>
                <Text style={styles.buttonText}>
                  Notification
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.addAlerts}>
                <Text style={styles.buttonText}>
                  Contact Us
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.listOfSettings}>
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.addAlerts}>
                <Text style={styles.signOutText}>
                  Sign out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    paddingRight: 20,
    marginTop: 40
  },
  heading: {
    flex:1,
    alignItems: 'center'
  },
  title: {
    color: '#333',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
    alignItems: 'center'
  },
  buttonStyle: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#333',
    fontSize:18
  },
  signOutText: {
    color: '#333',
    fontSize:18,
    color: 'red'
  }
})
