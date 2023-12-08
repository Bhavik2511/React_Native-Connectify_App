import { StyleSheet, Text, View , SafeAreaView, TextInput, ScrollView, Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchContent from '../Components/SearchContent';

const Search = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.mainwrapper}>
      <View style={styles.searchwrapper}>
        <View style={styles.searchbar}>
        <Ionicons name='search-outline' color='white' size={20} style={{marginLeft: 10}}/>
        <TextInput placeholder="Search" style={styles.inputbar} placeholderTextColor="#a9a9a9"/>

        </View>
      </View>
      
      <View style={styles.contentwrapper}>
        <SearchContent />
      </View>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0D0C12',
    height: '100%',
  },
  mainwrapper:{

  },
  searchwrapper:{
    width: '100%',
    padding: 10,
  },
  searchbar:{
    backgroundColor: '#252525',
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 15 ,
  },
  inputbar:{
    width: '93%',
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
  },

  contentwrapper:{
    // backgroundColor: '#252525',
    height: '100%'
  },
  
})