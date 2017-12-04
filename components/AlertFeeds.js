import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import { alerts } from '../data/Alert_Data'

export default class AlertFeeds extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        { alerts.map( ({id, title, comment, location, date, time, status, likes}) =>

          <View style={styles.item} key={id}>
            <View style={styles.rightBlock}>
              <Text style={styles.dateText}>
                {date}, {time}
              </Text>
              <View style={styles.strictColumn}>
                <Text style={styles.text}>
                  {title}, {location}
                </Text>
                <Text style={styles.text}>
                  {comment}
                </Text>
              </View>
              <Text style={styles.like}>
                {status == 'Closed' ? <Text style={styles.closed}>Closed </Text>
              : <Text style={styles.open}>Open </Text>}
                {likes} Likes
              </Text>
            </View>
            <View style={styles.leftBlock}>
              <TouchableOpacity>
                <EvilIcons name="like" size={48} color='rgb(88, 86, 214)'/>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    alignItems: 'center'
  },
  strictColumn:{
    flexDirection: 'column'
  },
  leftBlock: {
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  rightBlock: {
    width: 300
  },
  text: {
    color: '#666',
    fontSize: 18
  },
  dateText: {
    color: '#404040',
    fontSize: 18
  },
  closed: {
    color: '#rgb(255, 59, 48)',
    fontWeight: 'bold',
    padding: 5
  },
  open: {
    color: 'rgb(76, 217, 100)',
    fontWeight: 'bold',
    padding: 5
  },
  like: {
    paddingTop: 10,
    color: '#aaa',
    fontSize: 16
  }
});
