import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const image = require('../assets/images/avatar.png');
const user=[
    {
        name:'bhavik',
        image:'https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=220'
    },
    {
        name:'bhaviksharmaaaaaaa',
        image:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg'
    },
    {
        name:'bhavik',
        image:'https://i.pinimg.com/originals/47/73/de/4773deb137ca99e47968fa767a8d6f8e.jpg'
    },
    {
        name:'bhavik',
        image:'http://2.bp.blogspot.com/-Stm39RLc1wU/UCEJ1NHaWeI/AAAAAAAACLk/2uYnJX2jUVE/s1600/20120807.png'
    },
    {
        name:'bhavik',
        image:'https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=220'
    },
    {
        name:'bhavik',
        image:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125296371/original/653cc81872119844644e33d40f5afd9bd61743b6/create-cool-cartoon-avatars.jpg'
    },
    {
        name:'bhavik',
        image:'https://i.pinimg.com/originals/47/73/de/4773deb137ca99e47968fa767a8d6f8e.jpg'
    },
    {
        name:'bhavik',
        image:'http://2.bp.blogspot.com/-Stm39RLc1wU/UCEJ1NHaWeI/AAAAAAAACLk/2uYnJX2jUVE/s1600/20120807.png'
    },
    
]

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
        {user.map((story, index)=>(
            <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={styles.image} />
            
            <Text style={styles.name}>{
                story.name.length > 11 
                ? story.name.slice(0,10)+'...' : story.name.toLowerCase()
                }
                </Text>
            </View>
        ))}
        
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    container:{
    //    backgroundColor: 'red',
       paddingHorizontal: 3,
       marginBottom: 5,
    },
    image:{
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 7,
        borderWidth: 2,
        borderColor: '#8134AF',
        
    },
    name:{
        fontSize: 13,
        color: 'white',
        fontFamily: 'Poppins-Regular'
    },
})