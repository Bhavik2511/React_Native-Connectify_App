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
  // console.log('userData', userData)

  const [userdata, setuserdata] = useState([])
  useEffect(()=>{
      const reterivedata = async () =>{
          try{
              let res = await fetch('http://10.0.2.2:3000/getdata')
              const data = await res.json()
              setuserdata(data)
              // console.log(data)
          }
          catch(error){
              console.log("Error in fetching data", error)
          }
      }
      reterivedata()
  }, [])
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <StatusBar backgroundColor={'#0D0C12'}/>
    <Header />
    <Stories userdata={userdata}/>
    <ScrollView>
      {
        userdata.map((data)=>{
          return <Card key={data.id} userdata={data} />
        })
      }
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