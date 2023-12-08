import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchContent = () => {
    const searchData = [
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
              require('../assets/images/image.png'),
      ];
  return (
    <View>
        <ScrollView>
      <View style={styles.photocontainer}>
        {
            searchData.map((photo, index)=>{
                return(
                    <TouchableOpacity>
                    <Image source={photo} key={index} style={styles.photo}/>
                    </TouchableOpacity>
                )
            })
        }
      </View>
      </ScrollView>  
    </View>
  )
}

export default SearchContent

const styles = StyleSheet.create({
    photocontainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    photo:{
        height: 128,
        width: 128,
        marginRight: 5,
        marginBottom: 5,
    },
})