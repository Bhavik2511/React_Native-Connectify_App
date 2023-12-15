import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import BottomTab from '../Components/TabNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '../Components/Stories'
import Card from '../Components/Card'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = () => {

  const [userData, setuserData] = useState(null)
  useEffect(()=>{
    AsyncStorage.getItem('user')
  .then(data =>{
    // console.log(data)
    setuserData(JSON.parse(data))
  })
  .catch(error => alert(error))

  },[])
  console.log('userData', userData)
  
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