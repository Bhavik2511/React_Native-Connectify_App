import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import BottomTab from '../Components/TabNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '../Components/Stories'
import Card from '../Components/Card'


const Home = () => {

  // const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0D0C12'}/>
    <Header />
    <Stories />
    <ScrollView>
    <Card />
    <Card />
    <Card />
    <Card />
    </ScrollView>
    </View>
    </SafeAreaView>
  ) 
}

export default Home

const styles = StyleSheet.create({
  container:{
    // backgroundColor: '#252525',
    backgroundColor: '#0D0C12',
    height:'100%',
  },
  
})