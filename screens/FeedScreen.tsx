import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const FeedScreen = () => {
  return (
    <SafeAreaView style={{paddingTop : Platform.OS === "android" ? StatusBar.currentHeight : 20}}>
      <Text className=''>This is feed screen</Text>
    </SafeAreaView>
  )
}

export default FeedScreen