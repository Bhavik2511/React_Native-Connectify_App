import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/EvilIcons';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Reelcomponent = ({item, index, currindex}) => {
  const videoreference = useRef(null);

  const onBuffer = e => {
    console.log('buffering', e);
  };
  const videoError = e => {
    console.log('Video Error', e);
  };
  return (
    <View style={styles.container}>
      <Video
        source={item.video}
        ref={videoreference}
        onBuffer={onBuffer}
        onError={videoError}
        resizeMode="cover"
        repeat={true}
        //    paused={true}
        style={styles.backgroundVideo}
      />

      <View style={styles.bottomtab}>
        <View style={styles.hedwrap}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/images/avatar.png')}
              style={styles.headerImage}
            />
            <Text style={styles.headerText}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sideIconBar}>
        <TouchableOpacity style={{marginBottom: 15}}>
          <Ionicons name="heart-outline" size={35} style={{color: 'white'}} />
          <Text style={{color: 'white', marginTop: 10}}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 15}}>
          <Icons name="comment" size={38} style={{color: 'white'}} />
          <Text style={{color: 'white', marginTop: 10}}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 15}}>
          <Ionicons
            name="paper-plane-outline"
            size={35}
            style={{color: 'white'}}
          />
          <Text style={{color: 'white', marginTop: 10}}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 15}}>
          <Ionicons
            name="ellipsis-vertical"
            size={35}
            style={{color: 'white'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reelcomponent;

const styles = StyleSheet.create({
  container: {
    height: windowheight,
    width: windowWidth,
    position: 'relative',
  },
  backgroundVideo: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  text: {
    position: 'absolute',
    top: 50,
    color: 'white',
  },
  bottomtab: {
    position: 'absolute',
    // top: 10,
    bottom: 100,
    // height: '100%',
    width: '70%',
    // backgroundColor: 'grey',
  },
  hedwrap: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  headerImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#8134AF',
  },
  headerText: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  sideIconBar: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    // backgroundColor:'grey',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
});
