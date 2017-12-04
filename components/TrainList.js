import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TrainList extends React.Component {
  render() {
    return (
      <View>
        <Text>Train List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  }
})
