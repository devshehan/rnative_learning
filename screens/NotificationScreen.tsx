import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
  return (
    <View style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20}}>
      <Text> This is a notificationScreen</Text>
    </View>
  )
}

export default NotificationScreen