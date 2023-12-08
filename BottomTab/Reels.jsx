import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Reelcomponent from '../Components/Reelcomponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const videoData = [
  {
    video: require('../assets/videos/video1.mp4'),
    title: 'Ram_Charan',
    description: 'Feel the buity of nature',
    likes: '245k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video2.mp4'),
    title: 'The_Groot',
    description: "It's a tea time",
    likes: '656k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video3.mp4'),
    title: 'loverland',
    description: 'Feel the buity of nature',
    likes: '243k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video4.mp4'),
    title: 'mr. bean',
    description: 'How cute it is !!',
    likes: '876k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video5.mp4'),
    title: 'Ram_Charan',
    description: 'Feel the buity of nature',
    likes: '245k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video6.mp4'),
    title: 'The_Groot',
    description: "It's a tea time",
    likes: '656k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video7.mp4'),
    title: 'loverland',
    description: 'Feel the buity of nature',
    likes: '243k',
    isLike: false,
  },
  {
    video: require('../assets/videos/video8.mp4'),
    title: 'mr. bean',
    description: 'How cute it is !!',
    likes: '876k',
    isLike: false,
  },
];

const windowWidth= Dimensions.get('window').width;
const windowheight=Dimensions.get('window').height;

const Reels = () => {
  const [currIndex, setcurrIndex]= useState(0);

  const handlevalue=({index})=>{
    setcurrIndex(index);
  }

  return (
    
      <View style={styles.container}>
      <View style={styles.fixedcontainer}>
        <Text style={styles.fixedtext}>Reels</Text>
        <TouchableOpacity>
        <Ionicons name='camera-outline' color='white' size={35}/></TouchableOpacity>
      </View>
        <View>
          <SwiperFlatList
            vertical
            data={videoData}
            onChangeIndex={handlevalue}
            renderItem={({item, index})=>(
              <Reelcomponent item={item} index={index} currIndex={currIndex} />
            )}
            keyExtractor={(item, index)=> index}
          />
        </View>
      </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container:{
    height: windowheight,
    width: windowWidth,
    backgroundColor: '#0D0C12'
  },
  fixedcontainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    position: 'absolute',
    top:8,
    padding: 12,
    // backgroundColor: 'red',
    width: '100%',
    alignItems:'center',
    zIndex: 1
  },
  fixedtext:{
    fontSize:23,
    color: 'white',
    fontFamily:'Poppins-Regular',
    fontWeight:'600',
    letterSpacing: 1,
  },
});
