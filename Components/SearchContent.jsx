import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchContent = () => {
    const searchData = [
        {
            "index": 1,
            "image": "https://tse2.mm.bing.net/th?id=OIP.U9FnAG-hhbPJWGGsOpwIkQHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 2,
            "image": "https://tse2.mm.bing.net/th?id=OIP.UDanlWEWoHTBfNrT5xhFHAHaEK&pid=Api&P=0&h=220"
          },
          {
            "index": 3,
            "image": "https://tse4.mm.bing.net/th?id=OIP.sM0BdtdEsxl-4roCDkKmZAHaEB&pid=Api&P=0&h=220"
          },
          {
            "index": 4,
            "image": "https://tse2.mm.bing.net/th?id=OIP._3Mf0cvS0aV2zotVsWnu1QHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 5,
            "image": "https://tse3.mm.bing.net/th?id=OIP.ta18G-oRFnAAPAUDOSU4FAHaEK&pid=Api&P=0&h=220"
          },
          {
            "index": 1,
            "image": "https://tse2.mm.bing.net/th?id=OIP.U9FnAG-hhbPJWGGsOpwIkQHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 2,
            "image": "https://tse2.mm.bing.net/th?id=OIP.UDanlWEWoHTBfNrT5xhFHAHaEK&pid=Api&P=0&h=220"
          },
          {
            "index": 3,
            "image": "https://tse4.mm.bing.net/th?id=OIP.sM0BdtdEsxl-4roCDkKmZAHaEB&pid=Api&P=0&h=220"
          },
          {
            "index": 4,
            "image": "https://tse2.mm.bing.net/th?id=OIP._3Mf0cvS0aV2zotVsWnu1QHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 5,
            "image": "https://tse3.mm.bing.net/th?id=OIP.ta18G-oRFnAAPAUDOSU4FAHaEK&pid=Api&P=0&h=220"
          },
          {
            "index": 1,
            "image": "https://tse2.mm.bing.net/th?id=OIP.U9FnAG-hhbPJWGGsOpwIkQHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 2,
            "image": "https://tse2.mm.bing.net/th?id=OIP.UDanlWEWoHTBfNrT5xhFHAHaEK&pid=Api&P=0&h=220"
          },
          {
            "index": 3,
            "image": "https://tse4.mm.bing.net/th?id=OIP.sM0BdtdEsxl-4roCDkKmZAHaEB&pid=Api&P=0&h=220"
          },
          {
            "index": 4,
            "image": "https://tse2.mm.bing.net/th?id=OIP._3Mf0cvS0aV2zotVsWnu1QHaEo&pid=Api&P=0&h=220"
          },
          {
            "index": 5,
            "image": "https://tse3.mm.bing.net/th?id=OIP.ta18G-oRFnAAPAUDOSU4FAHaEK&pid=Api&P=0&h=220"
          }
      ];
  return (
    <View>
        <ScrollView>
      <View style={styles.photocontainer}>
        {
            searchData.map((photo, index)=>{
                return(
                    <TouchableOpacity  key={index} >
                    <Image source={{uri: photo.image}}style={styles.photo}/>
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